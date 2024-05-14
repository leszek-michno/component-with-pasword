import { useState } from "react";

const ProtectedComponent = ({ setAmount, setFinish, finish }) => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "12345";

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleChange = () => {
    setAmount(finish);
    setFinish(finish);
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
      <div>
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
