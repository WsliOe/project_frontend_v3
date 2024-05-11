import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/api/v1/hours";

export async function getHours() {
  const url = API_URL;
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();

  if (data.status !== "success") {
    throw new Error(data.message);
  }

  return data.data.hours;
}

export async function sendHours({ data }) {
  const url = API_URL;
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const dataRes = await response.json();
  if (dataRes.status !== "success") {
    throw new Error(dataRes.status);
  }

  return dataRes;
}

export async function updateHours({ hoursId, data }) {
  const url = `${API_URL}/${hoursId}`;
  const options = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const dataRes = await response.json();
  if (dataRes.status !== "success") {
    throw new Error(dataRes.status);
  }

  return dataRes;
}

export async function deleteHours({ hoursId }) {
  const url = `${API_URL}/${hoursId}`;

  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${Cookies.get("jwt")}`,
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, options);
  if (response.status !== 204) {
    throw new Error("Failed to delete!");
  }

  return response;
}

/*import axios from "axios";


export async function getHours() {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/hours");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Hours could not be loaded");
  }
}

export async function createEditHours(newHours, id) {
  try {
    if (!id) {
      // A) CREATE
      const response = await axios.post(
        "http://localhost:3000/api/v1/hours",
        newHours
      );
      return response.data;
    } else {
      // B) EDIT
      const response = await axios.put(
        `http://localhost:3000/api/v1/hours/${id}`,
        newHours
      );
      return response.data;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Hours could not be created or edited");
  }
}

export async function deleteHours(id) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/hours/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Hours could not be deleted");
  }
}

*/
