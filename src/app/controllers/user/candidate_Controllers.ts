import { Request, Response } from "express";
import { CandidateUseCase } from "../../../core/use-cases/user/CandidateUseCase";

export class Candidate_Controller {
  constructor(private candidateUseCase: CandidateUseCase) {}

  async apply4Job(req: Request, res: Response): Promise<void> {
    console.log("Received job application request");

    try {
      const { fullName, DOB, linkedin, country, email, contactNo, github } =
        req.body;

      const resume = req.file;
      const jobId = req.params.jobId;

      if (!resume) {
        res.status(400).json({ error: "Resume file is required" });
        return;
      }

      const jobApplicationDetails = {
        fullName,
        DOB,
        linkedin,
        country,
        email,
        contactNo,
        github,
        jobId,
        resumeUrl: "",
      };

      await this.candidateUseCase.execute(jobApplicationDetails, resume);

      res
        .status(201)
        .json({ message: "Job application submitted successfully" });
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Internal server error",
      });
    }
  }
}
