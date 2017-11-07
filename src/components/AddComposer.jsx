import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

class AddComposer extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div id="CTA">
          Name <input type="text" /> <br /><br /><br />
          Image Url <input type="text" /> <p />
          <Link to="/"><button type="submit" onClick={this.clicked.bind(this)}>Submit</button></Link>
        </div>
      </div>
    )
  }
}

export default AddComposer;