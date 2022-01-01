import { Router, Response } from "express";
import Question from "../models/Question";
import { AppRequest } from "../types";

const router = Router();

router.get("/:id", async ({ params, user }: AppRequest, res: Response) => {
  try {
    const { id } = params;

    if (!id) {
      throw new Error("Question id is required");
    }

    const question = await Question.findById(id);

    if (!question) {
      res.status(404).json({ message: "Question not found" });
    }

    res.json(question);
  } catch (e) {
    res.status(500).json("Server error");
  }
});

export default router;
