import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/Test.jsx';
import Composer from './components/Composer.jsx';
import AddComposer from './components/AddComposer.jsx';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      render: true,

      data: [{name: 'bach', url: 'http://www.thomasmorecollege.edu/wp-content/uploads/2013/10/bach_col.jpg'},
      {name: 'beethoven', url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTI2NTgyMzIxOTcyMjU5NDU5/beethoven-600x600jpg.jpg'},
      {name:'chopin', url: 'http://www.vinylrevinyl.com/wp-content/uploads/2008/08/frederic-chopin.jpg'}],
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={(props) => (<Composer data={this.state.data}/>)} />
          <Route path="/addComposer" render={(props) => (<AddComposer/>)} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));