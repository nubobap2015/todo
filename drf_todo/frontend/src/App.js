import './App.css';
import React from 'react';
import CUList from './components/customusers.js'
import ProjectList from './components/projects.js'
import axios from 'axios'

class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'customUsers': []
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
    }

   render() {
            return (


                   <div className="table-responsive">
                       <ProjectList projects={this.state.projects}/>
                   </div>
            )
       }
}

export default App;



