import React from "react";
import "./App.css";
import About from "./components/page/about/about";
import Shop from "./components/page/shop/shop";
import ItemInfo from "./components/page/iteminfo/itemInfo";
import { getAllItems, getItem } from "./web/service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

const home = props => <h1 {...props}>Fortnite Home</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selected: null
    };
  }

  componentDidMount() {
    getAllItems()
      .then(e => e.json())
      .then(e => this.setState({ data: e }));
  }

  onItemClick = id => {
    getItem(id)
      .then(e => e.json())
      .then(e => {
        console.log('ITEM::',e);
        this.setState({ selected: e })});
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact render={props => home(props)} />
          <Route path="/about" component={About} />
          <Route
            path="/shop"
            exact
            render={props => (
              <Shop
                {...props}
                data={this.state.data}
                click={this.onItemClick}
              />
            )}
          />
          <Route path="/shop/:id" render={props=><ItemInfo {...props} item={this.state.selected}/> }/>
        </Switch>
      </Router>
    );
  }
}

export default App;
