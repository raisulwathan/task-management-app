import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password && role) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push({ email, password, role });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Registrasi berhasil. Silakan login.");
      navigate("/login");
    } else {
      alert("Semua field harus diisi!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl border border-gray-100 p-8">
        <h2 className="text-3xl font-bold text-center text-[#336D82] mb-8">Register</h2>

        <div className="space-y-6">
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" />

          <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan password" />

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="pt-2">
            <Button text="Register" onClick={handleRegister} />
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Sudah punya akun?{" "}
              <span className="text-[#336D82] font-medium cursor-pointer hover:text-blue-800 transition-colors" onClick={() => navigate("/")}>
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
