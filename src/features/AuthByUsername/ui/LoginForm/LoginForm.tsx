import React, {memo, useCallback} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './LoginForm.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "entities/User/model/selectors/getLoginState/getLoginState";

interface LoginFormProps {
  className?: string,
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" className={cls.input} placeholder='Введите username' autofocus onChange={onChangeUsername} value={username}/>
      <Input type="text" className={cls.input} placeholder='Введите пароль' onChange={onChangePassword} value={password}/>
      <Button className={cls.loginBtn} theme={ThemeButton.OUTLINE}>{ t('Войти') }</Button>
    </div>
  );
});
