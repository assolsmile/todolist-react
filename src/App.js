import React, {Component} from 'react';
import ToDo from './component/ToDo';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: [
        "Love yourself", "Be the best"
      ],
      item: ""
    }
  }

  deleteToDo = (id) => {
    const toDos = this.state.taskList.filter((v, i) => {
      return id !== i
    });
    this.setState({
      taskList: toDos
    })
  };

  onChange = (event) => {
    this.setState({item: event.target.value});
  };


  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      taskList: [...this.state.taskList, this.state.item]
    });
  };


  render() {
    return (
      <div className="todo-app container">
        <header>
          <h3 className="center pink-text">TODO list</h3>
        </header>
        <form className="myForm center" onSubmit={this.onSubmit}>
          <input name="taskItem" className="input-task" placeholder="Write task" value={this.state.item} onChange={this.onChange}/>
          <button>Add</button>
        </form>
        <ToDo taskList={this.state.taskList} deleteToDo={this.deleteToDo}/>
      </div>
    );
  }
}

export default App;
