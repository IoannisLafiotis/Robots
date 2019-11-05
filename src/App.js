import React, {Component} from './react'
import ReactDOM from './react-dom'
import {robots} from './robots'
import SearchBox from './SearchBox'
import CardList from './CardList'



 class App extends Component {
     constructor(){
         super()
         this.state = {
            robots:robots,
            searchField: "",
         }
     }

     onSearchChange = (e) => {
         this.setState({searchField : e.target.value})
        
//        console.log(filteredRobots);
     } 
     render () {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
         return(
        <div className='tc'>
            <h1> Robo Friends </h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
    </div>
    );

     }
    
}

export default App