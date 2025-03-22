import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  ADMIN_ROUTE,
  BUY_ROUTE,
  CERTIFICATES_ROUTE,
  CLASSCONTENT_ROUTE,
  COURSES_ROUTE,

  DASHBOARDSTUDENT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  POSTVIDEO_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from "./constants/route";

import MainLayout from "./layouts/MainLayouts";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./components/profile/Profile";

import NotFoundPage from "./pages/NotFoundPage";
import BuyCourse from "./pages/studentdashboard/purchase/Payment";

import ClassContent from "./components/courses/ClassContent";
import UnAuthLayout from "./layouts/UnAuthLayout";
import AuthLayout from "./layouts/AuthLayout";

import SuperLayout from "./layouts/SuperLayout";
import HomePage from "./pages/Home";
import Dashboard from "./pages/studentdashboard/StudentDashboard";
import Courses from "./pages/studentdashboard/courses/Courses";
import CertificatePage from "./pages/studentdashboard/certificate/CertificatePage";
import MainLayoutStudent from "./layouts/MainLayouts";
import PostClassVideo from "./components/courses/PostClassVideo";
import MainLayouts from "./layouts/MainLayouts";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<SuperLayout />}>
        <Route path={HOME_ROUTE} element={<HomePage />} />
       
        <Route element={<MainLayouts />}>

          <Route element={<AuthLayout />}>
          <Route path={POSTVIDEO_ROUTE} element={<PostClassVideo />} />
            <Route path={DASHBOARDSTUDENT_ROUTE} element={<Dashboard />} />
            <Route path={COURSES_ROUTE}>
              <Route index element={<Courses />} />
              <Route path={CLASSCONTENT_ROUTE} element={<ClassContent />} />
            </Route>
            <Route path={PROFILE_ROUTE} element={<Profile />} />
            <Route path={BUY_ROUTE} element={<BuyCourse />} />
            <Route path={CERTIFICATES_ROUTE} element={<CertificatePage />} />
            <Route path={REGISTER_ROUTE} element={<Register />} />
          </Route>
          <Route element={<UnAuthLayout />}>
            <Route path={LOGIN_ROUTE} element={<Login />} />
           
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
