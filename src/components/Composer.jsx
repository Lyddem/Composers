import React  from 'react';
import {Component}  from 'react';
import {Link} from 'react-router-dom';

class Composer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  render () {
    return (
      <div>
        { this.state.data.map(obj => {
            return <div>
              <img src={obj.url} width="30" height="30"/>
              <div id="color">{obj.name}</div>
            </div>
          })
        }
        <br /><Link to="/addComposer"><button>Add Composer</button></Link>
      </div>
    );
  }
}

export default Composer;