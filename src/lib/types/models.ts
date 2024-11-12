import { Types } from "mongoose";

/**
 * User interface for the database
 * @interface
 */
export interface IUser {
  _id?: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
  createdAt: Date;
  avatar?: string;
}
