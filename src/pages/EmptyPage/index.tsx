import React, { FC } from 'react';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <div>This is empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
