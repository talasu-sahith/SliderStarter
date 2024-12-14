import { useState } from "react";
import { longList } from "./data";
import Details from "./Details";
import Slide from "./Slide";
const App = () => {
  const [list, setList] = useState(longList);
  console.log(list);
  return (
    <main>
      <Slide list={list} />
      {/* <Details list={list} /> */}
    </main>
  );
};
export default App;
