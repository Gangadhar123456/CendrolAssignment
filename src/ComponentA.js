import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [cendol, setCendol] = useState(2);

  return <ComponentB cendol={cendol} setCendol={setCendol} />;
}
export default ComponentA