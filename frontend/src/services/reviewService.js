import axios from "axios";

const api = "http://localhost:5000/api/reviews";

export const getReview = async () => {
  const res = await axios.get(api);
  return res.data;
};

export const approveReview = async (id) => {
  const res = await axios.put(`${api}/approve/${id}`);
  return res.data;
};

export const rejectReview = async (id) => {
  const res = await axios.put(`${api}/reject/${id}`);
  return res.data;
};

export const deleteReview = async (id) => {
  const res = await axios.delete(`${api}/${id}`);
  return res.data;
};
