import { Router } from "express";
import { createBook, deleteBook, getAllBook, getBookById, updateBook } from "../controllers/book.controller";

const bookRouter = Router();

bookRouter.post("/", createBook)
bookRouter.put("/:id", updateBook)
bookRouter.get("/", getAllBook)
bookRouter.get("/:id", getBookById)
bookRouter.delete("/:id", deleteBook)



export default bookRouter;