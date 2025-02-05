import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [token, setToken] = useState(null);

  const handleSubmit = async () => {
    const { data } = await axios.post("/api/auth", { email, password, isSignup });
    setToken(data.token);
    localStorage.setItem("token", data.token);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold">{isSignup ? "Sign Up" : "Login"}</h2>
        <input type="email" placeholder="Email" className="w-full mt-2 p-2 border" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mt-2 p-2 border" onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit} className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
          {isSignup ? "Sign Up" : "Login"}
        </button>
        <button onClick={() => setIsSignup(!isSignup)} className="text-blue-500 mt-2">
          {isSignup ? "Already have an account?" : "Create an account"}
        </button>
      </div>
    </div>
  );
}
