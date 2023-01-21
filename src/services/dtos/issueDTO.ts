export interface RepositoryIssueDTO {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}