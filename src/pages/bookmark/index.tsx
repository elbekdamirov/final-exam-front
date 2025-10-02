import StudentView from "@/components/student-view/StudentView";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import type { RootState } from "@/lib";
import { memo } from "react";
import { useSelector } from "react-redux";

const Bookmark = () => {
  const students = useSelector((state: RootState) => state.bookmarks.saved);
  console.log(students);

  return (
    <div>
      <Box>
        <Title>Bookmark</Title>
      </Box>
      <StudentView data={students} />
    </div>
  );
};

export default memo(Bookmark);
