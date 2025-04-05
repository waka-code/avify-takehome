import React from 'react';

interface LabelProps {
  text: string;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({ text, className = '' }) => {
  return <span className={className} >{text}</span>;
};