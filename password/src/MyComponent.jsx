

export function MyComponent({ amount, setAmount, finish, setFinish})
 {
  return (
    <>
      <input
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <input
        value={finish}
        onChange={(e) => {
          setFinish(e.target.value);
        }}
      />
    </>
  );
}

      