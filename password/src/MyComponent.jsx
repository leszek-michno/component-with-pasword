

export function MyComponent({ amount, setAmount, finish, setFinish, added, setAdded})


 {
  return (
    <>
    dostawa: 
      <input
        value={added}
        onChange={(e) => {
          setAdded(e.target.value);
        }}
      /> 
      {''} stan początkowy: 
      <input
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      /> 
      {''} sprzedaż: 
      <input
        value={finish}
        onChange={(e) => {
          setFinish(e.target.value);
        }}
      />
      <p>Jest: {(added * 1) + (amount * 1) - finish}</p>
      <h1>Kwota: {finish * 13 } zł</h1>
    </>
  );
}

      