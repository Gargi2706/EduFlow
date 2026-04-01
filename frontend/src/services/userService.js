import axios from "axios";

const api =  "http://localhost:3000/api/admin"

// export const getUsers = async () => {
//     const res = await axios.get(`${api}/users`)
//     return res.data;
// }

// export const blockUser = async (id) =>{
//     const res = await axios.put(`${api}/users/${id}/block`)
//     return res.data;
// }

// export const unblockUser = async (id) =>{
//     const res = await axios.put(`${api}/users/${id}/unblock`)
//     return res.data;

export const getUsers = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.get(`${api}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const blockUser = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${api}/users/${id}/block`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const unblockUser = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${api}/users/${id}/unblock`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

