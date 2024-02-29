import React, { Component } from 'react'
import Login from './Components/Login'
import ThemeContextProvider from './Context/themeContext'
import Navigation from './Components/Navigation'

export default class App extends Component {
  render() {
    return (
      <>
      <ThemeContextProvider>
        <Navigation/>
        <Login />
        </ThemeContextProvider>

      </>
    )
  }
}
