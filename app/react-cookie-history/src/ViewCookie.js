import React, {Component} from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class ViewCookie extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { cookies } = this.props;
    console.log(cookies.getAll());
    for (var key in cookies.getAll()) {
      console.log(key)
    }

    return (
      <div>ViewCookie</div>
    )
  }
}

export default withCookies(ViewCookie);
