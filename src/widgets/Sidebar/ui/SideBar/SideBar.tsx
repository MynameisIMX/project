import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ThemeButton} from "shared/ui/Button/Button";

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
      <Button data-testid='sidebar-toggle' onClick={onToggle} theme={ThemeButton.BACKGROUND_INVERTED} square={true} size={ButtonSize.L} className={cls.collapseBtn}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang}/>
      </div>
    </div>
  );
};
