import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const AWS_ACCESS_KEY_ID= process.env.AWS_ACCESS_KEY_ID
export const AWS_SECRET_ACCESS_KEY=process.env.AWS_SECRET_ACCESS_KEY
export const AWS_REGION=process.env.AWS_REGION
export const AWS_BUCKET_NAME=process.env.AWS_BUCKET_NAME

export const JUDGE0_BASE_URL = process.env.JUDGE0_BASE_URL

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

export const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET