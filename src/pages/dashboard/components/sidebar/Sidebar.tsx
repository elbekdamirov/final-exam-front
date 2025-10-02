import { Bookmark, ChartColumn, UserRoundPlus, UsersRound } from "lucide-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen overflow-auto bg-white border-r border-slate-200">
      <div className="p-4 flex items-center border-b border-slate-200 h-16 ">
        <div className="text-xl font-bold">Dashboard</div>
      </div>
      <div>
        <ul className="mt-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-3 pl-2 border-l-4  mb-2 flex items-center gap-2 hover:bg-gray-100 ${
                  isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent"
                }`
              }
              to={"/"}
            >
              <ChartColumn />
              <span>Statistic</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-3 pl-2 border-l-4  mb-2 flex items-center gap-2 hover:bg-gray-100 ${
                  isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent"
                }`
              }
              to={"/students"}
            >
              <UsersRound />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-3 pl-2 border-l-4  mb-2 flex items-center gap-2 hover:bg-gray-100 ${
                  isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent"
                }`
              }
              to={"/create-student"}
            >
              <UserRoundPlus />
              <span>Create Student</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `py-3 pl-2 border-l-4  mb-2 flex items-center gap-2 hover:bg-gray-100 ${
                  isActive
                    ? "border-blue-500 text-blue-500"
                    : "border-transparent"
                }`
              }
              to={"/bookmark"}
            >
              <Bookmark />
              <span>Bookmark</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Sidebar);
