import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import { Helmet } from "react-helmet"

const Button = () => {
  return <button onClick={(e) => console.log(e)} />
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Main</title>
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/sub">Sub</Link>
        </header>
      </div>
    )
  }
}
const Sub = () => {
  return (
    <div>
      <Helmet>
        <title>Sub</title>
      </Helmet>
      <div>sub</div>
      <Button />
    </div>
  )
}
const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sub" component={Sub} />
        <Route component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Main
