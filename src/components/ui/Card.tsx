import React from "react";
import { motion } from "framer-motion";
import { Task } from "../../types";
import { DropIndicator } from "./DropIndicator";

interface CardProps extends Task {
  handleDragStart: (e: React.DragEvent, card: Task) => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  id,
  column,
  handleDragStart,
}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
};
