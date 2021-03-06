import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';

import MensClothingIcon from '../../assets/icons/sidebar/mensClothingIcon';
import WomenClothingIcon from '../../assets/icons/sidebar/WomenClothingIcon';
import JewelleryIcon from '../../assets/icons/sidebar/jewelleryIcon';
import styles from './styles.module.scss';
import ElectronicsIcon from '../../assets/icons/sidebar/electronicsIcon';
import LogoutIcon from '../../assets/icons/logout/logoutIcon';
import HelpIcon from '../../assets/icons/help/helpIcon';
import ArrowLeftIcon from '../../assets/icons/arrows/arrowLeft';
import { $id } from '../../utils/domUtils';
import LogInIcon from '../../assets/icons/login/loginIcon';

const Sidebar = ({ openLogin }) => {
  const intl = useIntl();
  const locale = useSelector((state) => state.language.locale);

  const [sidebarVisible, toggleSidebar] = useState(() => window.innerWidth >= 900);

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

  return (
    <div
      className={`${styles.sidebar} ${sidebarVisible ? styles.sidebarFull : styles.sidebarMinimized
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
        <Link
          to="/men"
          className={styles.navLink}
          data-target="mens"
          data-tooltip={intl.formatMessage({ id: 'mensClothing' })}
          data-tooltip-direction="right"
          lang={locale}
        >
          <MensClothingIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="mensClothing" />
          </span>
        </Link>
        <Link
          to="/women"
          className={styles.navLink}
          data-target="women"
          data-tooltip={intl.formatMessage({ id: 'womenClothing' })}
          data-tooltip-direction="right"
        >
          <WomenClothingIcon />
          <span className={styles.linkText} lang={locale}>
            <FormattedMessage id="womenClothing" />
          </span>
        </Link>
        <Link
          to="/jewellery"
          className={styles.navLink}
          data-target="jewellery"
          data-tooltip={intl.formatMessage({ id: 'jewellery' })}
          data-tooltip-direction="right"
          lang={locale}
        >
          <JewelleryIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="jewellery" />
          </span>
        </Link>
        <Link
          to="/electronics"
          className={styles.navLink}
          data-target="electronics"
          data-tooltip={intl.formatMessage({ id: 'electronics' })}
          data-tooltip-direction="right"
          lang={locale}
        >
          <ElectronicsIcon />
          <span className={styles.linkText}>
            <FormattedMessage id="electronics" />
          </span>
        </Link>
      </div>
      <Link
        to="/referrals"
        className={styles.referralCard}
        lang={locale}
        data-tooltip={intl.formatMessage({ id: 'referral_message' })}
        data-tooltip-direction="right"
      >
        <p>
          <FormattedMessage id="referral_message" />
        </p>
      </Link>
      <div className={styles.bottomLinks}>
        <button
          aria-label="Login"
          className={`${styles.loginButton} ${styles.bottomLink}`}
          data-tooltip={intl.formatMessage({ id: 'login' })}
          data-tooltip-direction="right"
          lang={locale}
          onClick={openLogin}
        >
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
        <Link
          to="/help"
          className={`${styles.logout} ${styles.bottomLink}`}
          data-tooltip={intl.formatMessage({ id: 'help_center' })}
          data-tooltip-direction="right"
          lang={locale}
        >
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
