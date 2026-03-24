import axios from "axios";

export const getInstructorStudents = async (id) => {

const res = await axios.get(
`http://localhost:5000/api/dashboard/instructor/students/${id}`
);

return res.data;

};