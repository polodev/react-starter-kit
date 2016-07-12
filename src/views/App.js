import React from 'react';
import {Menu} from '../components'

class App extends React.Component {
   render() {
      return (
         <div>
          <Menu {...this.props} />
          This is the main app page
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea assumenda fugiat cupiditate, iusto porro non soluta dignissimos, excepturi alias culpa officia facilis necessitatibus perferendis cum tempora obcaecati voluptas voluptatibus!
         </div>
      );
   }
}

export default App;
