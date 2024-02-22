import { processServerResponse } from "./api";
import { baseUrl } from "./constants";

// export const tokenCheck = () => {
//   if (localStorage.getItem("jwt")) {
//     const jwt = localStorage.getItem("jwt");
//     console.log(`token check fired ${jwt}`);
//     return jwt;
//   }
// };

export const createUser = (input) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.name,
      avatar: input.avatar,
      email: input.email,
      password: input.password,
    }),
  }).then(processServerResponse);
};

export const signin = (input) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: input.email, password: input.password }),
  }).then(processServerResponse);
};

export const getContent = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(processServerResponse)
    .then((data) => data);
};

// export const tokenCheck = () => {
//   const jwt = localStorage.getItem("jwt");
//   console.log(`token check fired ${jwt}`);
//   if (jwt) {
//     getContent(jwt)
//       .then((res) => {
//         const userData = {
//           name: res.data.name,
//           avatar: res.data.avatar,
//           email: res.data.email,
//         };

//         return userData;
//       })
//       .catch((res) => console.log(res));
//   }
// };
