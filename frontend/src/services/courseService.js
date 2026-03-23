import axios from "axios"

const api = "http://localhost:3000/api/courses"


export const createCourse = async (formData) => {
  const res = await axios.post(`${api}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return res.data;
};
export const fetchAllCourse = async ()=>{
    const res  = await axios.get(`${api}/instructor`);
    return res.data;
}

export const deleteCourse = async (id)=>{
    const res = await axios.delete(`${api}/${id}`);
    return res.data;
}

export const editCourse = async (id, data) =>{
    const res = await axios.put(`${api}/${id}`, data);
    return res.data;
}

export const fetchById = async (id) => {
    const res = await axios.get(`${api}/${id}`)
    return res.data
}
