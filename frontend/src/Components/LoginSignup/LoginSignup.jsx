import { useState } from "react";
import "./LoginSignup.css";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [accountType, setAccountType] = useState("resident");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setAccountType("resident");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = isLogin
      ? { email, password } 
      : { name, email, password, role: accountType }; 

    const url = isLogin
      ? "http://localhost:8080/api/login"
      : "http://localhost:8080/api/register";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Server error:", data);
        alert(data.error || "Something went wrong");
        return;
      }

      console.log("Success:", data);
      alert(data.message || "Operation successful");

      if (!isLogin) {
        setName("");
        setEmail("");
        setPassword("");
        setAccountType("resident");
      }

    } catch (err) {
      console.error("Network error:", err);
      alert("Network error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">{isLogin ? "Login" : "Sign Up"}</h2>
        <hr />
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your full name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          {!isLogin && (
            <div className="form-group">
              <label>Account Type</label>
              <select
                className="input"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="resident">Resident (Individual)</option>
                <option value="business">Business Owner</option>
                <option value="government">Government Representative</option>
              </select>
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {!isLogin &&
            (accountType === "business" || accountType === "government") && (
              <p className="verification-warning">
                ⚠️ Your account will require verification after registration.
                A confirmation email will be sent to you.
              </p>
            )}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="button-primary" type="submit">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <hr />
        <p className="switch-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="button-secondary" onClick={toggleForm} type="button">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
