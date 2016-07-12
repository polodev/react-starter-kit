import React from 'react';
import {Menu} from '../components'

class App extends React.Component {
   render() {
      return (
         <div>
          <Menu {...this.props} />
          This is the main app page
         </div>
      );
   }
}

export default App;
