import React, {Suspense, useEffect, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {SideBar} from "widgets/Sidebar";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";


const App = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className='content-page'>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
