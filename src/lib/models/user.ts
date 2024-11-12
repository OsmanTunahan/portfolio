import { Schema, Types, models, model } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role: string;
  status: boolean;
  createdAt: Date;
  avatar?: string;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
  role: {
    type: String,
    default: "user",
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  }
});

const User = models.User || model<IUser>("User", userSchema);
export default User;