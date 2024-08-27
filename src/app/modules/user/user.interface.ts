import { Date } from "mongoose";

export interface TUser {
  id: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  role: "superAdmin" | "admin" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
}
