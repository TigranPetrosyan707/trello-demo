import { tasks } from "../../constant/task-object";
import ContainerBlock from "../containerBlock";

const Block = ({ children, status, selectedStatus }) => {
  return (
    <div className="box">
      <div className="boxHeader">
        <span>{children}</span>
      </div>
      <div className="boxContainer">
        {tasks
          .filter((task) => task.status === status)
          .map((task) => {
            return (
              <ContainerBlock
                key={task._id}
                {...task}
                selectedStatus={selectedStatus}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Block;
