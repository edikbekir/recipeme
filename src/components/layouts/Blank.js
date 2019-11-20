import React from 'react';
import UnauthorizedRoutes from '../../config/routes/unauthorized';

import { withRouter } from 'react-router';

class Blank extends React.Component {
  render() {
    let wrapperClass = "unauthorized-page " + this.props.location.pathname;
    return (
      <div id="wrapper" className={wrapperClass}>
        <UnauthorizedRoutes />
      </div>
    )
  }

}

export default withRouter(Blank);
