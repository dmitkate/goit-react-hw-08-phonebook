import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  }
 
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        // exact
        style={styles.link}
        
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        // exact
        style={styles.link}
        
      >
        Логин
      </NavLink>
      <Outlet />
    </div>
  );
}