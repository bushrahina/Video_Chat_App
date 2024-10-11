import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login";
import AuthRequired from "./AuthRequired";
import SignUp from "../components/sign-up";
import Home from "../components/home";
import Room from "../components/room";

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthRequired />}>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomId" element={<Room />} />
      </Route>

      <Route path="/login" element={<Login/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default AppRoutes;