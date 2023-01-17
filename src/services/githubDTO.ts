export interface GithubDTO {
  id: number;
  full_name: string;
  owner: {
    avatar_url: string;
  }
  description: string | null;
}