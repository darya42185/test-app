import React from 'react';
import solarModule from '../../assets/solarModule2.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Solar Modules</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={solarModule} alt='Solar module'/>
        </div>
    </React.Fragment>
}

export default Header;