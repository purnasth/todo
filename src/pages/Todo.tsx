import React from "react";
import { Board } from "../components/Board";

export const Todo: React.FC = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};
