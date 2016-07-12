import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Menu extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li className={this.props.route.path === '/' ? 'active' : ''} ><Link to={'/'}>App</Link></li>
          <li className={this.props.route.path === '/home' ? 'active' : ''} ><Link to={'/home'}>Home</Link></li>
          <li className={this.props.route.path === '/about' ? 'active' : ''} ><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
    );
  }
}
