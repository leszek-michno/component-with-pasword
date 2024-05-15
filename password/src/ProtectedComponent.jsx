import './App.css'
import { useState } from "react";

const ProtectedComponent = ({ amount, added, setAdded, setAmount, setFinish, finish }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "12345";

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = () => {
    setAdded(0) 
    setAmount((added * 1) + (amount * 1) - finish);
    setFinish(0)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Nieprawidłowy kod");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  if (isAuthenticated) {
    return (
      <div className='protect'>
        <button onClick={handleChange}>Uaktualnij</button>
        <br />
        <button onClick={handleLogout}>Zamknij</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        hasło:
        <input type="new-password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">potwierdź</button>
    </form>
  );
};


export default ProtectedComponent;
