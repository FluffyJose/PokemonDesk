import React, { FC } from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
}

const Heading: FC<HeadingProps> = ({ tag = 'h1', className, children }) => {
  return React.createElement(tag, { className: cn(className, s.root) }, children);
};

export default Heading;
