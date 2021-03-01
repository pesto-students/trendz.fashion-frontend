import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import MensClothingIcon from '../../assets/icons/sidebar/mensClothingIcon';
import WomenClothingIcon from '../../assets/icons/sidebar/WomenClothingIcon';
import JewelleryIcon from '../../assets/icons/sidebar/jewelleryIcon';
import styles from './styles.module.scss';
import ElectronicsIcon from '../../assets/icons/sidebar/electronicsIcon';
import LogoutIcon from '../../assets/icons/logout/component';
import HelpIcon from '../../assets/icons/help/component';
import ArrowLeftIcon from '../../assets/icons/arrows/arrowLeft';
import { $id } from '../../utils/domUtils';
import LogInIcon from '../../assets/icons/login/component';

const Sidebar = () => {
  const [sidebarVisible, toggleSidebar] = useState(true);
  const [sidebarStatusOnHover, toggleSidebarStatusOnHover] = useState(true);

  useEffect(() => {
    $id('root').classList = '';
    $id('root').classList.add(sidebarVisible ? 'sidebarOpen' : 'sidebarMinimized');
  }, [sidebarVisible]);

  const updateSideBarVisibility = (event) => {
    toggleSidebar(!sidebarVisible);
  };

  return (
    <div
      className={`${styles.sidebar} ${
        sidebarVisible ? styles.sidebarFull : styles.sidebarMinimized
      }`}
    >
      <button
        aria-label="Sidebar toggle"
        className={`${styles.sidebarToggler} ${sidebarVisible ? '' : styles.sidebarHidden}`}
        onClick={updateSideBarVisibility}
      >
        <ArrowLeftIcon />
      </button>
      <div className={styles.navLinks}>
        <Link to="/men" className={styles.navLink} data-target="mens">
          <MensClothingIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="mensClothing" />
          </span>
        </Link>
        <Link to="/women" className={styles.navLink} data-target="women">
          <WomenClothingIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="womenClothing" />
          </span>
        </Link>
        <Link to="/jewellery" className={styles.navLink} data-target="jewellery">
          <JewelleryIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="jewellery" />
          </span>
        </Link>
        <Link to="/electronics" className={styles.navLink} data-target="electronics">
          <ElectronicsIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="electronics" />
          </span>
        </Link>
      </div>
      <Link to="/referrals" className={styles.referralCard}>
        <p>
          <FormattedMessage id="sidebarAdd" /> <span className={styles.discount}>5%</span>
        </p>
      </Link>
      <div className={styles.bottomLinks}>
        <button aria-label="Logout" className={`${styles.logout} ${styles.bottomLink}`}>
          <LogInIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="login" />
          </span>
        </button>

        {/* ONLY IF USER LOGGER IN */}
        <button aria-label="Logout" className={`${styles.logout} ${styles.bottomLink}`}>
          <LogoutIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="logout" />
          </span>
        </button>
        <Link to="/help" className={`${styles.logout} ${styles.bottomLink}`}>
          <HelpIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="helpCenter" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
