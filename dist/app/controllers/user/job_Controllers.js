"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobControllers = void 0;
const jobEntity_1 = require("../../../core/entities/jobEntity");
class JobControllers {
    constructor(jobUseCase) {
        this.jobUseCase = jobUseCase;
    }
    async createJob(req, res) {
        try {
            const { userId } = req.params;
            const { id, job_title, skills, job_role, jobType, min_salary, max_salary, job_level, location, city, description } = req.body;
            const job = new jobEntity_1.JobEntity(id, job_title, skills, job_role, jobType, min_salary, max_salary, job_level, location, city, description);
            await this.jobUseCase.createJob(job, userId);
            res.status(201).json({ message: "Job created successfully" });
        }
        catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
        }
    }
    async getJobs(req, res) {
        try {
            const { userId } = req.params;
            const page = parseInt(req.query.page) || 1;
            const searchQuery = req.query.search || ""; // Corrected line
            if (!userId) {
                return res.status(400).json({ error: "UserId is required" });
            }
            const { jobs, hasMore, nextPage } = await this.jobUseCase.getJobsByUserIdWithPagination(userId, page, searchQuery);
            return res.status(200).json({
                jobs,
                hasMore,
                nextPage,
            });
        }
        catch (error) {
            return res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
        }
    }
    async editJob(req, res) {
        try {
            const { jobId } = req.params;
            const { job_title, skills, job_role, jobType, min_salary, max_salary, job_level, location, city, description } = req.body;
            const job = new jobEntity_1.JobEntity(jobId, job_title, skills, job_role, jobType, min_salary, max_salary, job_level, location, city, description);
            await this.jobUseCase.editJob(jobId, job);
            res.status(200).json({ message: "Job updated successfully" });
        }
        catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
        }
    }
    async deleteJob(req, res) {
        try {
            const { jobId, userId } = req.params;
            console.log(req.params);
            await this.jobUseCase.deleteJob(jobId, userId);
            res.status(200).json({ message: "Job deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
        }
    }
    async getAllJobs(req, res) {
        try {
            const { userId } = req.params;
            if (!userId) {
                return res.status(400).json({ error: "UserId is required" });
            }
            const jobs = await this.jobUseCase.getAllJobsByUserId(userId);
            return res.status(200).json({ jobs });
        }
        catch (error) {
            return res.status(500).json({ error: error instanceof Error ? error.message : "Internal server error" });
        }
    }
}
exports.JobControllers = JobControllers;
