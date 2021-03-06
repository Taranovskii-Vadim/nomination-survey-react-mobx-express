import { SurveyStatus } from "../../types";

type EmptyLoading = "";

export interface CommonSurveyFields {
  readonly id: string;
  status: SurveyStatus;
  title: string;
}

export interface SurveyResult {
  [key: string]: string | number;
}

export interface ChartData {
  [key: string]: number;
}

export type FormLoading = EmptyLoading | "finish" | "nextStatus";

export type Loading = EmptyLoading | "chart" | "survey";

export interface ButtonRender {
  label: string;
  to: SurveyStatus;
}

export interface Question {
  readonly id: string;
  description: string;
}

export interface HashedQuestion {
  [key: string]: Question;
}

export interface Survey extends CommonSurveyFields {
  description?: string;
  questions: Question[];
}
