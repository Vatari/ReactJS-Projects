import axios from "axios";

const authFetch = axios.create({
  baseURL: "http://b8e00a7b5ca8.sn.mynetname.net:3012/jsonstore",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent");

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log("got response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetch;
