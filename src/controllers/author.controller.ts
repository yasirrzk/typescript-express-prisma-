import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const authorRepository = new PrismaClient().author;

export const createAuthor = async (req: Request, res: Response) => {
  try {
    await authorRepository.create({
      data: req.body,
    });
    res.status(201).send({
      msg: "Success create author",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed create author",
      arr: error,
    });
  }
};

export const getAuthorByID = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const author = await authorRepository.findUnique({
      where: {
        id: authorId,
      },
      include: {
        books: true,
      },
    });

    res.status(200).send({
      msg: "Success get author",
      data: author,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed get author",
      error: error,
    });
  }
};

export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const data = req.body;

    await authorRepository.update({
      where: { id: authorId },
      data,
    });
    res.status(201).send({
      msg: "Success update author",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed update author",
      error: error,
    });
  }
};

export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    await authorRepository.delete({
      where: { id: req.params.id },
    });

    res.status(200).send({
      msg: "Success delete author",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "Failed delete author",
      error: error,
    });
  }
};

export const getAllAuthor = async (_req: Request, res: Response) => {
  try {
    const author = await authorRepository.findMany({
      include: {
        books: true,
      },
    });
    res.status(200).send({
      msg: "Success get all author",
      data: author,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      msg: "failed get all author",
      error: error,
    });
  }
};