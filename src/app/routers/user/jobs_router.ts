import express from "express";
import { JobControllers } from "../../controllers/user/job_Controllers";
import { JobUseCase } from "../../../core/use-cases/user/JobUseCase";
import { JobRepository } from "../../../infrastructure/repositories/JobRepository";
import asyncHandler from "express-async-handler";
import { checkApiKey } from "../../middlewares/ApikeyValidation";
const JobRouter = express.Router()

const jobRepository = new JobRepository()
const jobUsecase = new JobUseCase(jobRepository)
const job_Controllers = new JobControllers(jobUsecase)

JobRouter.post("/:userId",asyncHandler((req, res) => job_Controllers.createJob(req, res)));
JobRouter.get("/:userId", asyncHandler(async (req, res) => {await job_Controllers.getJobs(req, res);}));
JobRouter.put("/:jobId/:userId", asyncHandler((req, res) => job_Controllers.editJob(req, res))); 
JobRouter.delete("/:jobId/:userId", asyncHandler((req, res) => job_Controllers.deleteJob(req, res))); 

JobRouter.get("/ext/:userId",checkApiKey,asyncHandler(async (req, res) => {
    await job_Controllers.getAllJobs(req, res);
}));

export default JobRouter

