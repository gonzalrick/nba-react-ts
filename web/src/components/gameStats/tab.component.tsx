import React from 'react';
import { NavItem, NavLink } from 'reactstrap';

export default ({ title, toggle, isActive, index }: any) => (
  <NavItem className="item">
    <NavLink className={isActive ? 'active' : ''} onClick={() => { toggle(index) }}>
      {title}
    </NavLink>
  </NavItem>
);