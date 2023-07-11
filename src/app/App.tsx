import React, {Suspense, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {SideBar} from "widgets/Sidebar";


const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [])}>
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
