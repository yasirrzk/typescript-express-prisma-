import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const bookRepository = new PrismaClient().book;

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, author_id } = req.body;
    await bookRepository.create({
      data: {
        title,
        authorId: author_id,
      },
    });

    res.status(201).send({
      msg: "Success create book",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed create book",
      error: error,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const data = req.body;
    await bookRepository.update({
      where: { id: bookId },
      data,
    });
    res.status(200).send({
      msg: "Succes update book",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed update",
      error: error,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await bookRepository.findUnique({
      where: { id: req.params.id },
    });
    res.status(200).send({
      msg: "Success get book",
      data: book,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "failed get book",
      error: error,
    });
  }
};

export const getAllBook = async (_req: Request, res: Response) => {
  try {
    const books = await bookRepository.findMany();

    res.status(200).send({
      msg: "Success get all books",
      data: books,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "failed get books",
      error: error,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await bookRepository.delete({
      where: { id: req.params.id },
    });

    res.status(200).send({
      msg: "success delete book",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "failed delete book",
      error: error,
    });
  }
};
