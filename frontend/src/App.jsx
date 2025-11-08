import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Preview from "./pages/Preview";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import { useDispatch } from "react-redux";
import api from "./configs/api";
import { login, logout, setLoading } from "./app/features/authSlice";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    const token = localStorage.getItem("token");
    dispatch(setLoading(true));

    try {
      if (token) {
        const { data } = await api.get("/api/users/data", {
          headers: { Authorization: token },
        });

        if (data.user) {
          dispatch(login({ token, user: data.user }));
        } else {
          dispatch(logout());
        }
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(logout());
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Toaster />
      <Routes>
        {/* ✅ Home route */}
        <Route path="/" element={<Home />} />

        {/* ✅ Authenticated app area */}
        <Route path="app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
        </Route>

        {/* ✅ Resume preview */}
        <Route path="views/:resumeId" element={<Preview />} />
      </Routes>
    </>
  );
};

export default App;
