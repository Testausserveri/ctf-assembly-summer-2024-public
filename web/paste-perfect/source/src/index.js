import Database from "better-sqlite3";
import express from "express";
import { readFileSync } from "fs";
import { mkdir } from "fs/promises";
import { nanoid } from "nanoid";
import { join as pjoin } from "path";
import { check } from "./admin.js";

await mkdir(pjoin(import.meta.dirname, "../data"), { recursive: true });
const db = new Database(pjoin(import.meta.dirname, "../data/data.db"));
db.pragma("journal_mode = WAL");
db.exec("CREATE TABLE IF NOT EXISTS pastes (id TEXT PRIMARY KEY, content TEXT)");
process.on("exit", () => db.close());

const genId = () => nanoid(4);

const app = express();
app.use(express.urlencoded({ extended: true, limit: "512kb" }));

app.get("/", (_req, res) => {
    res.sendFile(pjoin(import.meta.dirname, "../static/index.html"));
});

app.post("/paste", (req, res) => {
    const id = genId();
    const content = req.body.content;
    db.prepare("INSERT INTO pastes (id, content) VALUES (?, ?)").run(id, content);
    res.redirect("/paste/" + id);
});

app.get("/paste/:id", (req, res) => {
    const template = readFileSync(pjoin(import.meta.dirname, "../static/paste.html"), "utf-8");
    const row = db.prepare("SELECT content FROM pastes WHERE id = ?").get(req.params.id);
    if (!row || typeof row !== "object" || !("content" in row) || typeof row.content !== "string") {
        res.status(404).send(
            readFileSync(pjoin(import.meta.dirname, "../static/404.html"), "utf8").replace(
                /\{\{what\}\}/g,
                "Paste"
            )
        );
        return;
    }
    res.send(
        template
            .replace(
                /\{\{content\}\}/g,
                row.content
                    .replace(/<script>/g, "&lt;script&gt;")
                    .replace(/<\/script>/g, "&lt;/script&gt;")
            )
            .replace(/\{\{id\}\}/g, req.params.id)
    );
});

app.post("/paste/:id/report", (req, res) => {
    const row = db.prepare("SELECT content FROM pastes WHERE id = ?").get(req.params.id);
    if (!row || typeof row !== "object" || !("content" in row) || typeof row.content !== "string") {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(200);
    check(req.params.id).catch(console.error);
});

app.use("*", (_req, res) => {
    res.status(404).send(
        readFileSync(pjoin(import.meta.dirname, "../static/404.html"), "utf8").replace(
            /\{\{what\}\}/g,
            "Page"
        )
    );
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
