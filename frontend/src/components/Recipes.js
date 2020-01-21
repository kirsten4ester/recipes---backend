import React, { Component } from 'react';
import '../App.css'; 

class Recipes extends Component {

    getData = () => {
        let url = "mongodb://localhost/recipes"
        fetch(url, {
        method: 'get'
    })
        .then(res => res.json())
        .then(recipes => {
            console.log(recipes);
    })}
    render() {
        return (
            <div>
               <button onClick={() => this.getData}> Get Recipes </button>
                   
               
            </div>
        )
    }
}

export default Recipes;