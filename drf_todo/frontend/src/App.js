import './App.css';
import React from 'react';
import axios from 'axios'
import CUList from './components/customusers.js'
import ProjectList from './components/projects.js'
import TodoList from "./components/todos";

import {BrowserRouter, Link, Route, Switch, Redirect/*, HashRouter*/} from "react-router-dom";


const NotFound404 = ({location}) => {
    return (
        <div>
            <h1>Страница по адресу '{location.pathname}' не найдена</h1>
        </div>
    )
}


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
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/users">Пользователи</Link>
                            </li>
                            <li>
                                <Link to="/projects">Проекты</Link>
                            </li>
                            <li>
                                <Link to="/todo">Заметки</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={() => <CUList customUsers={this.state.customUsers}/>}/>
                        <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/todo' component={() => <TodoList todos={this.state.todos}/>}/>
                        <Redirect from='/users' to='/' />
                        <Route component={NotFound404}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
