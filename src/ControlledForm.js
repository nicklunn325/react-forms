import React from 'react';

class ControlledForm extends React.Component{
    
    
    state = {
        firstName: "",
        lastName: "",
        location: "",
        age: "",
        favoriteActivity: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        this.clearForm()
        fetch("http://localhost:3000/people", config)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    clearForm = () => {
        this.setState({
            firstName: "",
            lastName: "",
            location: "",
            age: "",
            favoriteActivity: ""
        })
    }

    handleChange = (e) => {
        let obj = {}
        obj[e.target.id] = e.target.value
        this.setState(obj)
    }

    // handleFirstNameChange = (e) => {
    //     this.setState({
    //         firstName: e.target.value
    //     })
    // }

    // handleLastNameChange = (e) => {
    //     this.setState({
    //         lastName: e.target.value
    //     })
    // }

    render(){
        console.log(this)
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>First Name: </label>
                <input onChange={this.handleChange} id="firstName" type="text" value={this.state.firstName}></input>
                <br/>
                <label>Last Name: </label>
                <input onChange={this.handleChange} id="lastName" type="text" value={this.state.lastName}></input>
                <br/>
                <label>Location: </label>
                <input onChange={this.handleChange} id="location" type="text" value={this.state.location}></input>
                <br/>
                <label>Age: </label>
                <input onChange={this.handleChange} id="age" type="number" value={this.state.age}></input>
                <br></br>
                <label>Favorite Activity: </label>
                <input onChange={this.handleChange} id="favoriteActivity" type="text" value={this.state.favoriteActivity}></input>
                <br></br>
                <input type="submit" value="Sign Up!"/>
            </form>
                
            </>
        )
    }
}

export default ControlledForm;