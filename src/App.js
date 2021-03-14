import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is the favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
  {
    title: "Is React Useful?",
    content: "Yes It is one of the most useful JS libraries ever",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
