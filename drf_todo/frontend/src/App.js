import './App.css';
import React from 'react';
import CUList from './components/customusers.js'
import ProjectList from './components/projects.js'
import TodoList from "./components/todos";
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'customUsers': [],
            'projects': [],
            'todos': []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/users/')
            .then(response => {
                const customUsers = response.data
                this.setState(
                    {
                        'customUsers': customUsers
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://localhost:8000/api/projects/')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

        axios.get('http://localhost:8000/api/todo/')
            .then(response => {
                const todos = response.data
                this.setState(
                    {
                        'todos': todos
                    }
                )
                console.log(todos)
            }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="table-responsive">
                <CUList customUsers={this.state.customUsers}/>
                <ProjectList projects={this.state.projects}/>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }

}

export default App;



