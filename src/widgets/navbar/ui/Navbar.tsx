import React, {useCallback, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
  className?: string,
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        { t('Boйти') }
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet atque consectetur consequatur doloremque dolores, error expedita iusto laborum nulla obcaecati odio, quia reprehenderit? Dicta, dolorum fugiat harum illum iure sed sequi tempora. Adipisci deleniti dicta natus non omnis saepe suscipit. A error obcaecati provident qui rerum. Ipsum, quam quidem.
      </Modal>
    </div>
  );
};
