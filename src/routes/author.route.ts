import { Router } from "express";
import { createAuthor,
    deleteAuthor,
    getAllAuthor,
    getAuthorByID,
    updateAuthor } 
    from "../controllers/author.controller";

const authorRoute = Router();

authorRoute.post("/", createAuthor);
authorRoute.put("/:id", updateAuthor);
authorRoute.get("/", getAllAuthor)
authorRoute.get("/:id", getAuthorByID);
authorRoute.delete("/:id", deleteAuthor);

export default authorRoute