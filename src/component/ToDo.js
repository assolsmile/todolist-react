import React from 'react'

const ToDo = ({taskList, deleteToDo}) => {

  const ToDoList = taskList.length ?
    (
      taskList.map((v, i) => {
        return (
          <div className="collection-item" key={i}>
            <div className="item">
              <input type="checkbox" id="myTask" name="task"/>
              <label className="label" htmlFor="myTask">{v}</label>
            </div>
            <i className="fas fa-trash-alt" onClick={() => deleteToDo(i)}/>
          </div>
        )
      })
    ) : (<p className="center">You don't have any tasks</p>);

  return (
    <div className="todos collection">
      <form>
        {ToDoList}
      </form>
    </div>
  )
};

export default ToDo;
