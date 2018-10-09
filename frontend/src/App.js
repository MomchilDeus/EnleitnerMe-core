import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';
import CardsCarousel from './components/CardsCarousel/CardsCarousel';
import AddCard from './components/AddCard/AddCard';

class App extends Component {
  componentDidMount() {
    this.props.fetchCards({ a: 1 });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <h1>EnleitnerMe</h1>
            <Switch>
              <Route exact path="/" component={CardsCarousel} />
              <Route
                path="/add"
                render={() => <AddCard addCard={this.props.addCard} />}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
