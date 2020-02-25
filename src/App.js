import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(monsters => {
        this.setState({ monsters });
      });
  }

  setSearchField = value => {
    this.setState({ searchField: value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.includes(searchField)
    );

    return (
      <div className="App">
        <h1>Monsters pack</h1>
        <SearchBox placeholder="Search" setSearchField={this.setSearchField} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
