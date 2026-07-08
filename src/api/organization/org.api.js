import axiosInstance from '../axios/axiosInstance.js';

const ORG_ENDPOINT = 'https://civisence-api.duckdns.org/api/organizations';

export async function getOrganizations() {
  const response = await axiosInstance.get(ORG_ENDPOINT);
  return response.data;
}
