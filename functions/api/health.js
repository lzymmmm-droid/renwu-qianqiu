// Health Check Endpoint
export function onRequestGet() {
  return new Response(
    JSON.stringify({
      status: 'ok',
      service: '人物千秋 API',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    }),
    {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    }
  );
}
