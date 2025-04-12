import React from "react";

interface TaskItemProps {
  task: { id: number; text: string; completed: boolean };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        background: "#f1f1f1",
        padding: "10px",
        borderRadius: "6px",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <span>{task.text}</span>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onToggle(task.id)}>{task.completed ? "↺ Kembalikan" : "✔ Selesai"}</button>
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default TaskItem;
