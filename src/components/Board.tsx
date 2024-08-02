import React, { useState } from "react";
import { Column } from "./Column";
import { taskList } from "../constants/data";
import { BurnBarrel } from "./ui/BurnBarrel";

export const Board: React.FC = () => {
  const [cards, setCards] = useState(taskList);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {["backlog", "todo", "doing", "done"].map((column) => (
        <Column
          key={column}
          title={column.charAt(0).toUpperCase() + column.slice(1)}
          column={column}
          headingColor={getHeadingColor(column)}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

const getHeadingColor = (column: string) => {
  switch (column) {
    case "backlog":
      return "text-neutral-500";
    case "todo":
      return "text-yellow-200";
    case "doing":
      return "text-blue-200";
    case "done":
      return "text-emerald-200";
    default:
      return "text-neutral-500";
  }
};
