import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <div>
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            color={color}
            setColor={setColor}
          />
          <label
            style={{ color: color }}
          >{`You have selected ${color} color`}</label>
        </div>
      ) : null}
    </div>
  );
};
