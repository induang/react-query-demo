import { Button, Paper } from "@mui/material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { COURSE_QUERY_KEY } from "../../react-query/courseQuery";
import {
  createCourse,
  getAllCourse,
  ICourseDetail,
} from "../../service/course";

export default () => {
  const queryClient = useQueryClient();
  const courses = useQuery({
    queryKey: [COURSE_QUERY_KEY],
    queryFn: getAllCourse,
  });
  const addCourse = useMutation({
    mutationFn: createCourse,
    onSuccess: () => {
      queryClient.invalidateQueries([COURSE_QUERY_KEY]);
    },
  });
  const newCourse: ICourseDetail = {
    title: "Hello, new Course",
    description: "The Description",
    duration: 60,
    authors: ["9987de6a-b475-484a-b885-622b8fb88bda"],
  };

  if (courses.isLoading) return <h1>Loading...</h1>;
  if (courses.isError) return <h2>Error occured.</h2>;
  return (
    <div>
      {courses?.data?.map((item: any) => (
        <Paper key={item.id}>{item.title}</Paper>
      ))}
      <Button variant="contained" onClick={() => addCourse.mutate(newCourse)}>
        Add Course
      </Button>
    </div>
  );
};
