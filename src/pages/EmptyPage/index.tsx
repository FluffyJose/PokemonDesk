import React, { FC } from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is empty page for {title}</div>
    </div>
  );
};

export default EmptyPage;
