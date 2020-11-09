import React, { FC } from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  className?: string;
  color?: 'green' | 'yellow';
  size?: 'big' | 'small';
  // isYellow?: boolean;
  // isSmallButton?: boolean;
  isFullWidth?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  color = 'green',
  size = 'big',
  // isSmallButton = false,
  // isYellow = false,
  isFullWidth = false,
  className,
  children,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(
        s.root,
        s.color,
        s.size,
        /* isSmallButton && s.smallButton, isYellow && s.color */ isFullWidth && s.widthFull,
        className,
      )}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
