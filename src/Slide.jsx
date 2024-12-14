import { useState } from "react";
import Details from "./Details";

const Slide = ({ list }) => {
  const [activeId, setActiveId] = useState(0);
  const handleRandom = () => {
    setActiveId(Math.floor(Math.random() * list.length));
  };
  const handleNext = () => {
    setActiveId((prev) => {
      var next = checkNumber(prev + 1);
      return checkNumber(next);
    });
  };
  const checkNumber = (no) => {
    if (no > list.length - 1) {
      return 0;
    }
    if (no < 0) {
      return list.length - 1;
    } else {
      return no;
    }
  };
  const handlePrevious = () => {
    setActiveId((prev) => {
      var next = checkNumber(prev - 1);
      return next;
    });
  };
  return (
    <div>
      <button type="button" className="btn" onClick={handlePrevious}>
        Previous
      </button>
      <section className="slider-container">
        <Details list={list} activeId={activeId} />
      </section>
      <button type="button" className="btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};
export default Slide;
