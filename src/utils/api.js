import { baseUrl } from "./constants";

export const getItems = () => {
  const items = fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(processServerResponse);

  return items;
};

export const postItem = (input, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: input.name,
      weather: input.weather,
      imageUrl: input.imageUrl,
    }),
  }).then(processServerResponse);
};

export const deleteItem = (input, token) => {
  return fetch(`${baseUrl}/items/${input.item._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};

export const addCardLike = (id, token, currentUser) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: currentUser,
    }),
  }).then(processServerResponse);
};

export const removeCardLike = (id, token, currentUser) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: currentUser,
    }),
  }).then(processServerResponse);
};

export const editUser = (input, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: input.name,
      avatar: input.avatar,
    }),
  }).then(processServerResponse);
};

export const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
