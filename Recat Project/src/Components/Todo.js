import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Author_name: this.props.name,
            task_id: 1,
            Tasks: [],
            newTask: "",
            tasksDone: [],
            DeletedTaskName: ''
        }
        this.displayTasks = this.displayTasks.bind(this),
        this.addtask = this.addtask.bind(this);
        this.deleteTask = this.deleteTask.bind(this),
        this.displayDonedTask = this.displayDonedTask.bind(this)

    }

    displayTasks = () => {
        return (<div>
            {this.state.Tasks.map((item) => (
                <div key={item.id}>
                    <h2>{item.name} , {item.done ? "true" : "false"}</h2>
                    <button id='delete' onClick={() => { this.deleteTask(item.id)}}>Delete</button>
                </div>
            ))}
        </div>)
    }
    addtask = () => {
        return (
            this.setState((prevState)=>({
                Tasks: [...prevState.Tasks, { id: this.state.task_id, name: this.state.newTask, done: false }],
                task_id: prevState.task_id + 1,
                newTask: ""
            })),
            console.log("State Task ID in add task function: ", this.state.task_id)
        )
    }
    handlechange = (e) => {
        return (
            this.setState({
                newTask: e.target.value,
            })
        )
    }
    deleteTask = (id) => {
        // this.addDonedTask(id),
        let foundName = this.state.Tasks.find(task => task.id === id).name
        this.setState((prevState)=>({
            tasksDone: [...prevState.tasksDone, foundName],
            Tasks: prevState.Tasks.filter(task => task.id !== id),
        }))
    }
    displayDonedTask = () => {
        console.log("this.state.tasksDone >>>>>  ",this.state.tasksDone);
        
        return(
            <div>
            <h1>Done Tasks</h1>
            {this.state.tasksDone.map((item, index) => (
                <h3 style={{ color: "green" }} key={`displayDonedTask_${index}`}>
                    {item}
                </h3>
            ))}
            </div>
        )
        
    }
    static getDerivedStateFromProps(props, state) {
        if (state.Author_name !== props.name) {
            return { Author_name: props.name }
        }
        else {
            return null;
        }
    }
    render() {
        return (
            console.log("TASKS DONE in render:", this.state.tasksDone),
            <>
                <h1>{this.state.Author_name}'s list</h1>
                <input type='text' value={this.state.newTask} onChange={this.handlechange} />
                <button onClick={this.addtask}>Add Task</button>

                {/* <h5>Task Added  : {this.state.newTask}  </h5> */}
                {this.displayTasks()}
                {this.displayDonedTask()}
            </>
        )
    }

}

export default Todo

