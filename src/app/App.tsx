import React, {Suspense, useEffect} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {SideBar} from "widgets/Sidebar";


const App = () => {
  const {theme} = useTheme();

  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error('Test');
    }
  }, [])

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
