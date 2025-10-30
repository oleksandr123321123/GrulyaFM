// Vercel Serverless Function для удаления push subscriptions

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { endpoint } = req.body;

    if (!endpoint) {
      return res.status(400).json({ error: 'Endpoint required' });
    }

    // TODO: Удалить из базы данных
    // await deleteFromDB(endpoint);

    console.log(`✅ Push subscription removed: ${endpoint}`);

    return res.status(200).json({
      success: true,
      message: 'Subscription removed'
    });
  } catch (error) {
    console.error('Error removing subscription:', error);
    return res.status(500).json({
      error: 'Failed to remove subscription',
      message: error.message
    });
  }
}
