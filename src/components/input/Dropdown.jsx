import React from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = ({ title, className, options = [] }) => {
  return (
    <div className={className}>
      <h3 className="heading18Grey">{title}</h3>
      <select className={styles.select} name="cars" id="cars">
        <option value="">Select</option>
        {options.map((item) => (
          <option value={item.value}>{item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
