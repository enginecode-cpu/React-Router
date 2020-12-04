import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

export default function Profiles() {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            activeStyle={activeStyle}
            to="/profiles/making"
            active={true}
          >
            making
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/mengoo">
            mengoo
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact={true}
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
}
