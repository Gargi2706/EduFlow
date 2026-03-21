
const api = "http://localhost:3000/api/enrollment"

export const enrollCourse = async (courseId) => {

  const response = await fetch(`${api}/enroll/:courseId`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      courseId: courseId
    }),
  });

  const data = await response.json();
  return data;
};