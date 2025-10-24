import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(
    "/assets",
    express.static(path.join(process.cwd(), "attached_assets"), {
      maxAge: "1d",
      setHeaders: (res, filePath) => {
        if (filePath.endsWith(".mp4")) {
          res.setHeader("Content-Type", "video/mp4");
          res.setHeader("Accept-Ranges", "bytes");
        }
      },
    })
  );

  const httpServer = createServer(app);

  return httpServer;
}
