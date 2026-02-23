export type RequestStatus = "open" | "progress" | "resolved";

export interface Request {
  id: string;
  category: string;
  subject: string;
  date: string;
  status: RequestStatus;
}
