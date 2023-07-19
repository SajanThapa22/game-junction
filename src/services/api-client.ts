import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5a045a8af6d14f139d84eb6fe915ebd7",
  },
});
