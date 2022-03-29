import './App.css';
import React from 'react';
import CUList from './components/customusers.js'
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
    }

   render() {
            return (
                   <div class="table-responsive">
                       <CUList customUsers={this.state.customUsers} />
                    </div>
            )
       }
}

export default App;



