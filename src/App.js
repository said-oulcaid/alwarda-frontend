import {  Routes } from "react-router-dom";
import { centerRoutes } from "./pages/centre/routes";
import { homeRoutes } from "./pages/home/routes";
import { studentRoutes } from "./pages/student/routes";
import { utilisateurRoutes } from "./pages/user/routes";
import { teacherRoutes } from "./pages/teacher/routes";
import { levelRoutes } from "./pages/level/routes";
import { subjectRoutes } from "./pages/subject/routes";

const App = () => {
  return (
    <>
      <Routes>
        {homeRoutes}
        {centerRoutes}
        {studentRoutes}
        {utilisateurRoutes}
        {teacherRoutes}
        {levelRoutes}
        {subjectRoutes}
      </Routes>
    </>
  );
};

export default App;
