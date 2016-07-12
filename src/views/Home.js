import React from 'react';
import {Menu} from '../components'

class Home extends React.Component {
   render() {
      return (
         <div>
            <Menu {...this.props} />
            Home
            <div>
              <img src="../static/images/laravel.png" alt=""/>
            </div>
         </div>
      );
   }
}

export default Home;
