import React, { useState } from "react";
import { Task } from "../../types";

interface AddCardProps {
  column: string;
  setCards: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const AddCard: React.FC<AddCardProps> = ({ column, setCards }) => {
  const [title, setTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddCard = () => {
    if (!title) return;
    const newCard: Task = {
      id: Date.now().toString(),
      title,
      column,
    };
    setCards((prev) => [...prev, newCard]);
    setTitle("");
    setIsAdding(false);
  };

  return isAdding ? (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded border border-neutral-700 bg-neutral-800 p-2 text-sm text-neutral-100"
      />
      <button
        onClick={handleAddCard}
        className="rounded bg-green-600 p-2 text-sm text-neutral-100"
      >
        Add
      </button>
    </div>
  ) : (
    <button
      onClick={() => setIsAdding(true)}
      className="rounded bg-neutral-800 p-2 text-sm text-neutral-400"
    >
      + Add Card
    </button>
  );
};
