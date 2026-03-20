import axios from "axios"

const api = "http://localhost:3000/api/courses"

export const fetchAllCourse = async ()=>{
    const res  = await axios.get(`${api}/instructor`);
    return res.data;
}

export const deleteCourse = async ()=>{
    const res = await axios.delete(`${api}/${id}`);
    return res.data;
}

export const editCourse = async () =>{
    const res = await axios.put(`${api}/${id}`);
    return res.data;
}

export const fetchById = async () => {
    const res = await axios.get(`${api}/${id}`)
    return res.data
}
