import './App.css'
export function MyComponent({
  amount,
  setAmount,
  finish,
  setFinish,
  added,
  setAdded,
}) {
  return (  
    <div>
      <span> <strong>Litovel Premium</strong> </span>
      <span>dostawa:</span>
      <input
        type="number"
        value={added}
        onChange={(e) => {
          setAdded(e.target.value);
        }}
      />
      <span>stan początkowy:</span>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <span>sprzedaż:</span>
      <input
        type="number"
        value={finish}
        onChange={(e) => {
          setFinish(e.target.value);
        }}
      />
      <span>stan końcowy: {added * 1 + amount * 1 - finish}</span>
      <span>przychód: {finish * 13} zł</span>
    </div>
  );
}
