
function ComponentB({ cendol, setCendol }) {
  const handleClick = () => {
    setCendol(cendol + 10);
  };

  return (
    <center>
      <button onClick={handleClick}>Add 10 to Cendol</button>
      <p>{cendol}</p>
    </center>
  );
}
export default ComponentB