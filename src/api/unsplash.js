import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 7eAC_q8vPCHGhHw2AegR5mR1xF0xexLR1nUr2S9Alzw",
  },
});
