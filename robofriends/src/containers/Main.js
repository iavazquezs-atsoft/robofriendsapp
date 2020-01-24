import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
//import { robots } from './robots'
import './Main.css'


class Main extends Component {
    constructor() {
        super()
        this.state = {
            //robots: robots, 
            robots: [], 
            searchfield: ''
        }
        console.log('constructor')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
            return response.json()
        }).then(users => {
            
            this.setState({
                robots: users
            })
            
           /*
            this.setState({
                robots: []
            })
            */
        })
        console.log('componentDidMount')
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const { robots, searchfield} = this.state

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        console.log('render')
        if (!filteredRobots.length) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}  />
                    <Scroll>
                        <CardList robots={ filteredRobots } />
                    </Scroll>
                </div>
                
            )
        }
    }
}

export default Main