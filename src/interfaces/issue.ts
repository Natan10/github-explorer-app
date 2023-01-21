export interface RepositoryIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}