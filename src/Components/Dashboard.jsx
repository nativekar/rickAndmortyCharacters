import React, { Component } from "react";
import Characters from "./Characters";

class Dashboard extends Component {
  state = {
    characters: {},
  };

  componentDidMount = () => {
    this.fetchCharacters();
  };

  fetchCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ characters: data });
        console.log(data);
      });
  };

  render() {
    const { characters } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <Characters characters={characters} />
      </div>
    );
  }
}

export default Dashboard;
