import axios from "axios"

const api = "http://localhost:3000/api/courses"


export const createCourse = async (courseData) => {

  const token = localStorage.getItem("token");

  const res = await axios.post(
    "http://localhost:3000/api/courses",
    courseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
// export const fetchAllCourse = async ()=>{
//     const res  = await axios.get(`${api}/instructor`);
//     return res.data;
// }

export const fetchAllCourse = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${api}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data.data;
};
// export const deleteCourse = async (id)=>{
//     const res = await axios.delete(`${api}/${id}`);
//     return res.data;
// }

export const deleteCourse = async (id) => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${api}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};

export const editCourse = async (id, data) =>{
    const res = await axios.put(`${api}/${id}`, data);
    return res.data;
}

export const fetchById = async (id) => {
    const res = await axios.get(`${api}/${id}`)
    return res.data
}

export const fetchInstructorCourses = async () => {

  const token = localStorage.getItem("token");

  const res = await fetch(`${api}/my-course`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return data.data;
};


