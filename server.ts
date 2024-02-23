// Import required modules from Oak
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// Create a new router
const router = new Router();

// Define a simple GET route
router.get("/", (context) => {
  context.response.body = "Hello, Deno!";
});

// More routes can be added here
// For example, a POST route
// router.post('/data', (context) => {
//   // Handle POST request
// });

// Initialize the application
const app = new Application();

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

// Listen on a port
await app.listen({ port: 8000 });
console.log("Server is running on http://localhost:8000");
