import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find((u: any) => u.email === email && u.password === password);

    if (foundUser) {
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", JSON.stringify(foundUser));
      if (foundUser.role === "admin") {
        navigate("/tasks");
      } else {
        navigate("/products");
      }
    } else {
      alert("Email atau Password salah!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 rounded-lg">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center text-[#336D82] mb-8">Login</h2>

        <div className="space-y-6">
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" />

          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" />

          <div className="pt-2">
            <Button text="Login" onClick={handleLogin} />
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <span className="text-[#336D82] font-medium cursor-pointer hover:text-blue-800 transition-colors" onClick={() => navigate("/register")}>
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
