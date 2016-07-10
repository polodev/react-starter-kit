import React from 'react';
import {Menu} from '../components'

class About extends React.Component {
   render() {
      return (
         <div>
            <Menu {...this.props} />
            About page
         </div>
      );
   }
}
export default About;
