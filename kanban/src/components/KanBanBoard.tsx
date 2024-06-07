import React from "react";

function KanBanBoard() {
  return (
    <div>
      <button
        className="
      h-[60px] 
      w-[350px] 
      min-w-[350px] 
      cursor-pointer 
      rounded-lg 
      bg-mainBackgroundColor 
      border-2 
      border-columnBackgroundColor 
      p-4 ring-rose-500 
      hover:ring-2
      "
      >
        Add Column
      </button>
    </div>
  );
}

export default KanBanBoard;
