import { Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAllCourse } from "../../service/course";

export default () => {
  const courses = useQuery({
    queryKey: ["getCourses"],
    queryFn: getAllCourse,
  });

  if (courses.isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      {courses?.data?.map((item: any) => (
        <Paper key={item.id}>{item.title}</Paper>
      ))}
    </div>
  );
};
