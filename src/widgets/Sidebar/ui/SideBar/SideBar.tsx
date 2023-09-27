import React, {memo, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {Button, ButtonSize, ButtonTheme} from "shared/ui/Button/Button";
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SideBarProps {
  className?: string,
}

export const SideBar = memo(({ className }: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  const itemsList = React.useMemo(() => SidebarItemsList.map((item) => (
    <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed]);

  return (
    <div data-testid='sidebar' className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
      <Button data-testid='sidebar-toggle' onClick={onToggle} theme={ButtonTheme.BACKGROUND_INVERTED} square={true} size={ButtonSize.L} className={cls.collapseBtn}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.items}>
        {itemsList}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} short={collapsed}/>
      </div>
    </div>
  );
});
