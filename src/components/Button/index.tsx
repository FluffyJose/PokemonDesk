import React, { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  className?: string;
  isYellow?: boolean;
  isSmallButton?: boolean;
  isFullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  isSmallButton = false,
  isYellow = false,
  isFullWidth = false,
  className,
  children,
}) => {
  return (
    <button
      type="button"
      className={cn(
        s.root,
        isSmallButton && s.smallButton,
        isYellow && s.color,
        isFullWidth && s.widthFull,
        className,
      )}>
      {children}
    </button>
  );
};

export default Button;
