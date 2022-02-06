import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8ec0d1939461028706d51f288feb8dde7c68ad9a45fbb7b4ad1c1f9d5e1da8dc",
  },
});
