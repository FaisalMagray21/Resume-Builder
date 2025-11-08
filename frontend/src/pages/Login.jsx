import React, { useState } from "react";
import { Lock, Mail, User2Icon } from "lucide-react";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = new URLSearchParams(window.location.search);
  const urlstate = query.get("state");

  const [state, setState] = useState(urlstate || "login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔄 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      // 🔐 Store token + user
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      dispatch(login(data));
      toast.success(data.message || "Login successful!");

      navigate("/app"); // redirect to dashboard
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };

  // 🔁 Toggle login/register
  const toggleForm = () => {
    setState((prev) => (prev === "login" ? "register" : "login"));
    setFormData({ name: "", email: "", password: "" }); // clear fields
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-lg"
      >
        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please {state} to continue
        </p>

        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border-none outline-none ring-0 w-full text-gray-700"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-4 h-4 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border-none outline-none ring-0 w-full text-gray-700"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock className="w-4 h-4 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 w-full text-gray-700"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left text-green-500">
          <button
            type="button"
            className="text-sm hover:underline"
            onClick={() => toast("Password reset feature coming soon")}
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
        >
          {state === "login" ? "Login" : "Sign Up"}
        </button>

        <p
          onClick={toggleForm}
          className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-green-500 hover:underline">Click here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
