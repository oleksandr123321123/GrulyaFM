// Vercel Serverless Function для проксирования радио потоков
// Решает проблему CORS при воспроизведении радиостанций

export default async function handler(req, res) {
  const { url } = req.query;

  // Проверка что URL передан
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    // Fetch радио поток
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*',
        'Accept-Encoding': 'identity',
        'Range': req.headers.range || 'bytes=0-'
      },
      redirect: 'follow'
    });

    // Если редирект, следуем за ним
    if (response.status >= 300 && response.status < 400) {
      const redirectUrl = response.headers.get('location');
      if (redirectUrl) {
        return res.redirect(307, `/api/radio-proxy?url=${encodeURIComponent(redirectUrl)}`);
      }
    }

    // Проверка успешности запроса
    if (!response.ok) {
      return res.status(response.status).json({
        error: `Failed to fetch stream: ${response.statusText}`
      });
    }

    // Копируем важные заголовки
    const contentType = response.headers.get('content-type') || 'audio/mpeg';
    const contentLength = response.headers.get('content-length');
    const acceptRanges = response.headers.get('accept-ranges');

    // Устанавливаем CORS заголовки
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Range, Accept-Encoding');
    res.setHeader('Access-Control-Expose-Headers', 'Content-Length, Content-Range, Accept-Ranges');

    // Устанавливаем заголовки для потокового воспроизведения
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Connection', 'keep-alive');

    if (contentLength) {
      res.setHeader('Content-Length', contentLength);
    }
    if (acceptRanges) {
      res.setHeader('Accept-Ranges', acceptRanges);
    }

    // Стриминг данных
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      res.write(Buffer.from(value));
    }

    res.end();

  } catch (error) {
    console.error('Proxy error:', error);
    return res.status(500).json({
      error: 'Failed to proxy stream',
      message: error.message
    });
  }
}

// Настройки Vercel для потокового воспроизведения
export const config = {
  api: {
    bodyParser: false,
    responseLimit: false,
  },
};
