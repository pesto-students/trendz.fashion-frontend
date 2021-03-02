import React from 'react';

import styles from './OutlineButton.module.scss';

const OutlineButton = ({ title = 'button', className }) => {
  return <button className={`${styles.button} ${className}`}>{title}</button>;
};

export default OutlineButton;
