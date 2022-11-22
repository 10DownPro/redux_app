
export const AddTaskAction= (task) => (dispatch, getState) => {
    const {
        Task: { tasks },
    } = getState();

    const hasTasks = tasks.find((i) => i.task === task);

    if(!hasTasks && task !== "") {
        dispatch({
            type: "ADD_TASK",
            payload: [ { id: tasks, task }, ...tasks]
        })
    }
};


export const RemoveTaskAction=(task)=>(dispatch, getState) => {
    const {
        toDo: { tasks },
    } = getState();

    dispatch({
        type: "REMOVE_TASK",
        payload:tasks.filter((t) => t.id !== task.id),
    });

};