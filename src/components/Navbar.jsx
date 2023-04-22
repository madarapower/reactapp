import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { Badge } from '@mui/material';
import "../styles/navbar.scss"


const Navbar = () => {
  return (
    <div className='Container'>
      <div className='Wrapper'>
        <div className='Left'>
          <span className='Language'>RU</span>
          <div className='SearchContainer'>
            <input/>
            <Search style={{ color: 'gray', fontSize: 24 }} />
          </div>
        </div>
        <div className='Center'>
          <h1 className='Logo'>InherencyPC</h1>
        </div>
        <div className='Right'>
          <div className='MenuItem'>Регистрация</div>
          <div className='MenuItem'>Войти</div>
          <div className='MenuItem'>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
