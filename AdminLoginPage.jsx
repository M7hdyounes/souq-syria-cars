import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "123456"; // يفضل تغييره لاحقاً

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    } else {
      setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">تسجيل دخول المدير</h2>
        
        {error && <div className="bg-red-100 text-red-600 p-2 mb-4 rounded">{error}</div>}
        
        <div className="mb-4">
          <label className="block mb-1 text-right">البريد الإلكتروني:</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            dir="ltr"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-right">كلمة المرور:</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            dir="ltr"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          دخول
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;