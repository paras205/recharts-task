import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://mdsa.bipad.gov.np/api/v1",
  headers: { Accept: "application/json" }
});

export default instance;
