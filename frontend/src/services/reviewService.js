import axios from "axios";

const api = "http://localhost:3000/api/reviews";

export const getReview = async () => {

  const token = localStorage.getItem("token");

  const res = await axios.get(`${api}/review`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data.data;
};


export const approveReview = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${api}/approve/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const rejectReview = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.put(
    `${api}/reject/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const deleteReview = async (id) => {

  const token = localStorage.getItem("token");

  const res = await axios.delete(`${api}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
