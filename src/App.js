import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
  {
    label: "Red Color",
    value: "red",
  },
  {
    label: "Blue Color",
    value: "blue",
  },
  {
    label: "Green Color",
    value: "green",
  },
];
export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
