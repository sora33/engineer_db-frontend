import { User } from "@/types/user";

export interface Post {
  id: string;
  content: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}
