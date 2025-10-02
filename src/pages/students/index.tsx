import { memo } from "react";
import Box from "@/components/ui/Box";
import Title from "@/components/ui/Title";
import { NavLink, Outlet } from "react-router-dom";

const Student = () => {

  return (
    <div>
      <Box>
        <div className="flex justify-between">
          <Title>Student</Title>
        </div>
      </Box>
      <Box>
        <div className="flex gap-6">
          <NavLink className="border-b-2 border-blue-500" to={""}>
            All
          </NavLink>
          <NavLink className="border-b-2 border-transparent" to={"male"}>
            Male
          </NavLink>
          <NavLink className="border-b-2 border-transparent" to={"female"}>
            Female
          </NavLink>
        </div>
      </Box>
      <Outlet />
    </div>
  );
};

export default memo(Student);
