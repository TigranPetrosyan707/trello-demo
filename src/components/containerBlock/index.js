import { useState } from "react";

const ContainerBlock = ({ selectedStatus, ...task }) => {
  const [taskContent, setTaskContent] = useState({
    title: task.title,
    description: task.description,
    category: task.category,
    editMode: task.editMode,
  });

  const [draft, setDraft] = useState({
    title: taskContent.title,
    description: taskContent.description,
    category: taskContent.category,
    editMode: taskContent.editMode,
  });

  const popUpButton = () => {
    setTaskContent({ ...taskContent, editMode: !task.editMode });
  };
  return (
    <div className="containerBlock">
      <span>
        Title : <span className="innerSPAN">{taskContent.title}</span>
      </span>
      <span>
        Description :{" "}
        <span className="innerSPAN">{taskContent.description}</span>
      </span>
      <span>
        Category : <span className="innerSPAN">{taskContent.category}</span>
      </span>
      <div className="btn">
        <button onClick={popUpButton}>edit</button>
      </div>
      <div className={taskContent.editMode ? "editPopUp" : "editPopUpActive"}>
        <div className="popUpContent">
          <div className="selectedStatuses">
            <button onClick={() => selectedStatus(task._id, "blocked")}>
              blocked
            </button>
            <button onClick={() => selectedStatus(task._id, "todo")}>
              todo
            </button>
            <button onClick={() => selectedStatus(task._id, "in_progress")}>
              progress
            </button>
            <button onClick={() => selectedStatus(task._id, "done")}>
              done
            </button>
          </div>

          <div>
            <label>
              Title :{" "}
              <input
                type="text"
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label>
              Description :{" "}
              <input
                type="text"
                value={draft.description}
                onChange={(e) =>
                  setDraft({ ...draft, description: e.target.value })
                }
              />
            </label>
          </div>
          <div>
            <label>
              Category :{" "}
              <input
                type="text"
                value={draft.category}
                onChange={(e) => {
                  setDraft({ ...draft, category: e.target.value });
                }}
              />
            </label>
          </div>
          <div>
            <button
              onClick={() =>
                setTaskContent({ ...draft, editMode: !taskContent.editMode })
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerBlock;
