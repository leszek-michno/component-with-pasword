
import './App.css';
import { MyComponent } from './MyComponent';
import ProtectedComponent from './ProtectedComponent';
import useLocalStorage from "use-local-storage";

function App() {
  const [amount, setAmount] = useLocalStorage('amount', '');
  const [finish, setFinish] = useLocalStorage('finish', '');
  const [added, setAdded] = useLocalStorage('added', '');

  return (
    <div>
      <ProtectedComponent 
      added={added} 
      setAdded={setAdded} 
      amount={amount} 
      setAmount={setAmount} 
      setFinish={setFinish} 
      finish={finish} />
      <br />
      <MyComponent
      added={added}
      setAdded={setAdded} 
      amount={amount} 
      setAmount={setAmount} 
      finish={finish} 
      setFinish={setFinish} />
    </div>
  );
}

export default App;

