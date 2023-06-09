import React, {ReactNode, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {Portal} from "shared/ui/Portal/Portal";
import {ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?: boolean,
  onClose?: () => void,
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useContext(ThemeContext);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            { children }
          </div>
        </div>
      </div>
    </Portal>
  );
};
