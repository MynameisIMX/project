import React, {Suspense, useEffect, useState} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {useTheme} from "app/providers/ThemeProvider";
import {SideBar} from "widgets/Sidebar";
import {Modal} from "shared/ui/Modal/Modal";


const App = () => {
  const {theme} = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <button onClick={() => setIsOpen(true)}>modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque consectetur consequatur doloremque dolores, error expedita iusto laborum nulla obcaecati odio, quia reprehenderit? Dicta, dolorum fugiat harum illum iure sed sequi tempora. Adipisci deleniti dicta natus non omnis saepe suscipit. A error obcaecati provident qui rerum. Ipsum, quam quidem.
        </Modal>
        <div className='content-page'>
          <SideBar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
