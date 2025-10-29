// If a station URL ends with .m3u8 and native HLS is not supported, use hls.js from CDN
export async function setupHls(audioEl, src){
  try{
    const canNative = audioEl && typeof audioEl.canPlayType === 'function' && audioEl.canPlayType('application/vnd.apple.mpegURL');
    if (canNative){
      audioEl.src = src;
      return;
    }
    const Hls = (await import('https://cdn.jsdelivr.net/npm/hls.js@1')).default;
    if (Hls && Hls.isSupported()){
      const hls = new Hls({ enableWorker: true });
      hls.loadSource(src);
      hls.attachMedia(audioEl);
    } else {
      audioEl.src = src;
    }
  } catch(e){
    console.warn('HLS setup failed, falling back to direct src', e);
    audioEl.src = src;
  }
}
