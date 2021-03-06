import { Request } from "express";

export interface AppRequest extends Request {
  user: {
    id: string;
    login: string;
    role: string;
  };
}

export type Catalog = "database" | "results";
