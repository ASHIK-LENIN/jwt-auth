import React, { Component } from 'react'
import { ThemeContext } from '../Context/themeContext'

 class Navigation extends Component {
    static contextType = ThemeContext;

  render() {
    console.log(this.context);

    return (
      <div>Navigation</div>
    )
  }
}

export default Navigation