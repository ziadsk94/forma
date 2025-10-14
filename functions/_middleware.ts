// Cloudflare Pages middleware for Next.js
export function onRequest(context: any) {
  // Handle Next.js routing
  return context.next();
}
