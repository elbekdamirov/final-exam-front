import StudentView from "@/components/student-view/StudentView";
import { memo } from "react";
import { useStudent } from "@/api/hooks/useStudent";

const All = () => {
  const { getStudent } = useStudent();

  const { data } = getStudent();

  return (
    <div>
      <StudentView data={data} />
    </div>
  );
};

export default memo(All);
