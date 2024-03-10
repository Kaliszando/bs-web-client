import { IssueSeverity } from "../../../../../api/models/issue-severity";
import { IssueType } from "../../../../../api/models/issue-type";

export interface ListFilter {
  query: string,
  severity: IssueSeverity;
  type: IssueType;
  status: string
  reporterId: number;
  assigneeId: number;
  endDate: string;
  startDate: string;
}
