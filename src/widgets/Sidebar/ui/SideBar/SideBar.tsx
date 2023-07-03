import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SideBarProps {
  className?: string,
}

export const SideBar = ({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div data-testid='sidebar' className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
      <button data-testid='sidebar-toggle' onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
