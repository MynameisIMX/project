import React, {MutableRefObject, ReactNode, useCallback, useContext, useEffect, useRef, useState} from 'react';
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from './Modal.module.scss';
import {Portal} from "shared/ui/Portal/Portal";
import {ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";

interface ModalProps {
  className?: string,
  children?: ReactNode,
  isOpen?: boolean,
  onClose?: () => void,
  lazy?: boolean,
}

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose, lazy }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const mods: Mods = {
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

  if (lazy && !isMounted) {
    return null;
  }

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
