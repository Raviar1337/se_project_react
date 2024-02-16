import { baseUrl } from "./constants";

// export const tokenCheck = () => {
//   if (localStorage.getItem("jwt")) {
//     const jwt = localStorage.getItem("jwt");
//     console.log(`token check fired ${jwt}`);
//     return jwt;
//   }
// };

export const getContent = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });
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
