import React from 'react';
import { Link } from 'react-router-dom';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../UI/Logo/Logo';

export default ({ data, role = 'user', logoutHandler, logoWidth = 280, notifications, date, clock, toggle }) => (
    <>
        <nav className="navbar navbar-expand-lg sticky-top bg-white p-0">
            <Link to={"/" + role + "/dashboard"} className="navbar-brand text-center d-none d-sm-flex justify-content-center align-items-center p-0 m-0 align-middle" style={{ flex: '0 0 ' + logoWidth + 'px', height: 70 }}><Logo /></Link>
            <NavigationItems data={data} logoutHandler={logoutHandler} notifications={notifications} clock={clock} date={date} sidedrawerToggle={toggle} />
        </nav>
    </>
);