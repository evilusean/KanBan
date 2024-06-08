import React, { useMemo } from "react";
import PlusIcon from "../icons/PlusIcon";
import { useState } from "react";
import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

function KanBanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  return (
    <div
      className="
    m-auto
    flexmin-h-screen
    w-full
    items-center
    overflow-x-auto
    overflow-y-hidden
    px-[40px]

    "
    >
      <DndContext>
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                />
              ))}
            </SortableContext>
          </div>

          <button
            onClick={() => {
              createNewColumn();
            }}
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
      flex
      gap-2
      "
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
      </DndContext>
    </div>
  );
  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }
}
function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanBanBoard;
