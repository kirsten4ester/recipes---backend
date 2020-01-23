import React, { Component } from 'react';
import '../App.css'; 

class Recipes extends Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            name: [],
            ingredients: [],
            instructions: []
        }
    }

    getData = () => {
        // let proxyUrl = "https://cors-anywhere.herokuapp.com/" 
        let targetUrl = ("http://localhost:5000/recipes")
        // "mongodb://localhost/recipes" 
        fetch(targetUrl)
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);          
            
            const recipesArr = recipes.map(item => {
                console.log(item);
                
                return (
                    <>
                    <h1> {item.name} </h1>
                    <p> {item.ingredients} </p>
                    <p> {item.instructions} </p>
                    </>
                )
                // this.setState({ name: item.name })
                // this.setState({ ingredients: item.ingredients })
                // this.setState({ instructions: item.instructions })
            })
            this.setState({recipes: recipesArr})
    })
}

    render() {
        return (
            <div>
               <button onClick={() => this.getData()}> Get Recipes </button> 
               <div> {this.state.recipes} </div>
               
                {/* <h1>{this.state.name}</h1>
                <p>{this.state.ingredients}</p>
                <p>{this.state.instructions}</p> */}
            </div>
        )
    }
}

export default Recipes;