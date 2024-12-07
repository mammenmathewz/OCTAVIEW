import { JobEntity } from "../../entities/jobEntity";

export interface IjobRepository{
    create(job: JobEntity,userId:string): Promise<void>;
    findJobsPerIdWithPagination(userId: string, page: number, pageSize: number): Promise<{ jobs: JobEntity[], totalJobs: number }>
}