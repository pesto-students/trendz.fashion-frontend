import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';

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
  const [sidebarVisible, toggleSidebar] = useState(() => window.innerWidth >= 900);
  const intl = useIntl();

  useEffect(() => {
    const rootDiv = $id('root');
    if (rootDiv) {
      rootDiv.classList.remove('sidebarOpen');
      rootDiv.classList.remove('sidebarMinimized');
      rootDiv.classList.add(sidebarVisible ? 'sidebarOpen' : 'sidebarMinimized');
    }
  }, [sidebarVisible]);

  const updateSideBarVisibility = (event) => {
    toggleSidebar(!sidebarVisible);
  };

  function createReferralLocale() {
    return {
      __html: intl.formatMessage({
        id: 'referral_message',
        values: { className: styles.discount },
      }),
    };
  }

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
          <FormattedMessage id="referral_message" />
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
        {/* <button aria-label="Logout" className={`${styles.logout} ${styles.bottomLink}`}>
          <LogoutIcon />
          <span className={styles.linkText}>
            Logout
          </span>
        </button> */}
        <Link to="/help" className={`${styles.logout} ${styles.bottomLink}`}>
          <HelpIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="help_center" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
