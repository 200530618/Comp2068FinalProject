import { Router } from "express";
import { home, about, contact } from "../controllers/PagesController.js";
import { isAuthenticated } from "../controllers/AuthenticationController.js";

// Creates a router
const router = Router();

// Defines routes and associates them with controller actions
router.get("/", isAuthenticated, home);
router.get("/about", isAuthenticated, about); // Add this line for the about page
router.get("/contact", isAuthenticated, contact);

export default router;
