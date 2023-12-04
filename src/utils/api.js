import { baseUrl } from "./constants";

export const getItems = () => {
  const items = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);

  return items;
};

export const postItem = (input) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    }),
  }).then(processServerResponse);
};

const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
