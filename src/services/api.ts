import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000
});


// /repos/owner/repo_name
// /repos/owner/repo_name/issues