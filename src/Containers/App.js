import React, {Component} from 'react'
import  { connect } from 'react-redux'

//import ReactDOM from 'react-dom'
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList'
import './App.css';
import Scroll from '../Components/scroll';
import robots from '../robots'
import {setSearchField} from '../actions'

const mapStateToProps =  state => {
    return {
        searchField: state.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

 class App extends Component {
     constructor(){
         super()
         this.state = {
            robots:[]
         }
     }
     componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
             response.json();
         })
         .then(users=> {
             this.setState({robots:robots })    
        })
       }

//      onSearchChange = (e) => {
//          this.setState({searchField : e.target.value})
        
// //        console.log(filteredRobots);
//      } 
     render () {
        const { robots} = this.state;
        const { searchField, onSearchChange } = this.props
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (robots.length === 0){
            return <h1> Loading  </h1>
        } else {
         return(
        <div className='tc'>
            <h1 className='f2'> Robo Friends </h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>           
                 <CardList robots={filteredRobots}/>
            </Scroll>
    </div>
    );
         }
     }
    
}

export default connect(mapStateToProps , mapDispatchToProps)(App);