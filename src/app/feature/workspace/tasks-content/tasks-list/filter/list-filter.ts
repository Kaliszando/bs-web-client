import { IssueSeverity } from "../../../../../api/models/issue-severity";
import { IssueType } from "../../../../../api/models/issue-type";

export interface ListFilter {
  query: string,
  severities: IssueSeverity[];
  types: IssueType[];
  statuses: string[]
  reporterId: number;
  assigneeId: number;
  endDate: string;
  startDate: string;
}
