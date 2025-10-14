// Cloudflare Pages middleware for Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function onRequest(context: any) {
  // Handle Next.js routing
  return context.next();
}
