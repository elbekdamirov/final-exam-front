import { memo } from "react";
import { useStudent } from "@/api/hooks/useStudent";
import StudentView from "@/components/student-view/StudentView";

const Female = () => {
  const { getStudent } = useStudent();

  let { data } = getStudent();

  return (
    <div>
      <StudentView
        data={data?.filter((item: any) => item.gender == "female")}
      />
    </div>
  );
};

export default memo(Female);
