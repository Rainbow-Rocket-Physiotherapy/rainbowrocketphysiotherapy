export const prerender = true;

export function load() {
  console.log("SSR is working: page.server.js load function running");
  return { message: "Hello from SSR" };
}
