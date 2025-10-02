import { useStudent } from "@/api/hooks/useStudent";
import StudentView from "@/components/student-view/StudentView";
import { memo } from "react";

const Male = () => {
  const { getStudent } = useStudent();

  const { data } = getStudent();
  return (
    <div>
      <StudentView data={data?.filter((item: any) => item.gender == "male")} />
    </div>
  );
};

export default memo(Male);
