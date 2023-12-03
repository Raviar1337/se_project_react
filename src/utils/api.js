import { baseUrl } from "./constants";

export const getItems = () => {
  const items = fetch("http://localhost:3001/items", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);

  return items;
};

const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
