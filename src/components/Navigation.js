import React from 'react';
import { Link ,Outlet } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
 
};

const Navigation = () => (
  <nav>
    <Link to="/"
      // exact
      style={styles.link}
   >
      Главная
    </Link>

    <Link
      to="/contacts"
      // exact
      style={styles.link}
      
    >
      Заметки
    </Link>
    <Outlet />
  </nav>
);

export default Navigation;