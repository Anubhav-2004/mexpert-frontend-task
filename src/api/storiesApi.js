import axios from "axios";

const BASE_URL = "https://mxpertztestapi.onrender.com/api";

export const fetchStories = () =>
  axios.get(`${BASE_URL}/sciencefiction`);

export const fetchStoryById = (id) =>
  axios.get(`${BASE_URL}/sciencefiction/${id}`);
