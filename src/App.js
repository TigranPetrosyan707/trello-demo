import { useState } from "react";

import "./App.css";
import Block from "./components/block";
import { tasks } from "./constant/task-object";

function App() {
  const [blockTasks, setBlockTasks] = useState(tasks);

  const selectedStatus = (id, newStatus) => {
    setBlockTasks(
      blockTasks.map((block) => {
        if (block._id === id) {
          block.status = newStatus;
          return block;
        }
        return block;
      })
    );
  };

  return (
    <div className="container">
      <Block status="blocked" selectedStatus={selectedStatus}>
        Blocked
      </Block>
      <Block status="todo" selectedStatus={selectedStatus}>
        Todo
      </Block>
      <Block status="in_progress" selectedStatus={selectedStatus}>
        In Progress
      </Block>
      <Block status="done" selectedStatus={selectedStatus}>
        Done
      </Block>
    </div>
  );
}

export default App;
