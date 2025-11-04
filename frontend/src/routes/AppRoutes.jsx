import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Main from "../pages/Main";
import OrganizationList from "../components/OrganizationList";
import UserLayout from "../layouts/UserLayout";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import CreateReminders from "../pages/CreateReminders";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* 👤 User routes (with UserLayout) */}
        <Route element={<UserLayout />}>
          <Route path="/user" element={<OrganizationList />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/settings" element={<Settings />} />
          <Route path="/user/create-reminders" element={<CreateReminders />} />
        </Route>
      </Routes>
    </Router>
  );
}
