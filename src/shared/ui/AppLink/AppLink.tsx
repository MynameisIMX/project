import React, {FC, memo, ReactNode} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMATRY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string,
  theme?: AppLinkTheme,
  children?: ReactNode,
}

export const AppLink = memo((props: AppLinkProps) => {
  const { className, children, to, theme = AppLinkTheme.PRIMATRY, ...otherProps } = props;
  return (
    <Link to={to} className={classNames(cls.link, {}, [className, cls[theme]])} { ...otherProps }>
      { children }
    </Link>
  );
});
