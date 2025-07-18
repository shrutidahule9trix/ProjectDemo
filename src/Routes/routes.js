

/** @format */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Index from "../Components/Pages/Entry/Index";
import LoginPage from "../Components/Pages/Login/Login.jsx";
import Organisation from "../Components/Pages/Organisation/Organisation.jsx";
import AddUser from "../Components/Pages/AddUser/AddUser.jsx";
import SystemAttribute from "../Components/Pages/SystemAttribute/SystemAttribute.jsx";
import PivotPage from "../Components/Pages/Pivot/Pivot.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />}>
        <Route path="organisation" element={<Organisation />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="system-attribute" element={<SystemAttribute />} />
        <Route path="pivot" element={<PivotPage />}/>
                


        </Route>
      

      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

export default router;
