import React, {Suspense, useEffect, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {SideBar} from "widgets/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {getUserInited, userActions} from "entities/User";


const App = () => {
  const {theme} = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <div className='content-page'>
          <SideBar/>
          { inited && <AppRouter/> }
        </div>
      </Suspense>
    </div>
  );
};

export default App;
