import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav-bar.css';

interface Page {
  name: string;
  path: string;
}

export interface NavBarProps {
  pages: Page[];
}

const NavBar: React.FC<NavBarProps> = ({ pages }: NavBarProps) => {
  return (
    <nav className="nav-bar">
      {/* <NavLink to={'/'} className="button-text-2 logo">
        RealWorld
      </NavLink> */}

      <ul className="nav-bar-list">
        {pages.map((page, pageIndex) => (
          <li key={pageIndex}>
            <NavLink to={page.path} className="body-text-3 nav-bar-list-item-text">
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default NavBar;
