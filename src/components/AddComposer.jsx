import React from 'react';
import {Component} from 'react';

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
          <button type="submit" >Submit</button>
        </div>
      </div>
    )
  }
}

export default AddComposer;