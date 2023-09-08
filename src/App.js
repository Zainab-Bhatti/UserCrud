//import { UserList } from "./modules/users/components/UserList";
import { Navbar } from "./modules/users/components/Navbar";
//import { UserForm } from "./modules/users/components/UserForm";
import { Route, Routes } from "react-router-dom";
//import { ViewUser } from "./modules/users/components/ViewUser";
import { UserRoutes } from "./router/Routes"

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
      {UserRoutes.map((ele) => (
        <Route path={ele.path} element={ele.element} />
      ))}        
 </Routes>
      </div>
    </div>
  );
};
