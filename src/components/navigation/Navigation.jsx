import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import languageAction from '../../redux/actions/languageAction';

import styles from './styles.module.scss';
import CartIcon from '../../assets/icons/cart/component';
import ProfileIcon from '../../assets/icons/profile/component';
import Logo from '../../assets/icons/logo/logo';
import SearchIcon from '../../assets/icons/search-icon/searchIcon';
import CloseIcon from '../../assets/icons/close/component';

import UKFlag from '../../assets/images/countryFlags/UKFlag.png';
import IndiaFlag from '../../assets/images/countryFlags/IndianFlag.png';
import spainFlag from '../../assets/images/countryFlags/spainFlag.png';

const Navigation = () => {
  const intl = useIntl();
  const flags = {
    en: UKFlag,
    hi: IndiaFlag,
    es: spainFlag,
  };

  const flagLanguage = {
    en: 'English',
    hi: 'हिन्दी',
    es: 'Español',
  };

  const dispatch = useDispatch();
  const locale = useSelector((state) => state.language.locale);

  const [languageDropdown, toggleLanguageDropdown] = useState(false);
  const [showSearchBar, toggleSearchBar] = useState(false);

  useEffect(() => {
    // console.log("Mounted");
    return () => {
      // console.log("UNMounted");
    };
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.pageBranding}>
        <Logo container="header" />
        <span className={styles.logoTitle}>Little Tags</span>
      </Link>
      <div className={`${styles.searchWrap} ${showSearchBar ? styles.showSearchBar : ''}`}>
        <label htmlFor="search" className={styles.searchLabel}>
          <span>Search</span>
          <input
            id="search"
            type="text"
            placeholder={intl.formatMessage({ id: 'search' })}
            className={styles.input}
          />
        </label>
        <button aria-label="Search" className={styles.searchButton}>
          <SearchIcon container="searchBarContainer" />
        </button>
        <button
          aria-label="Close Search"
          className={styles.closeSearchButton}
          onClick={() => toggleSearchBar(!showSearchBar)}
        >
          <CloseIcon container="fillDark" />
        </button>
      </div>
      <div className={styles.rightNavigation}>
        <button
          aria-label="Search"
          className={`${styles.navItem} ${styles.searchButton}`}
          onClick={() => toggleSearchBar(!showSearchBar)}
        >
          <SearchIcon container="searchBarContainer" />
        </button>
        <div
          className={`${styles.languageSwitcher} ${languageDropdown ? styles.dropdownOpen : ''}`}
        >
          <button
            aria-label="Language Switcher"
            className={`${styles.navItem} ${styles.languageSwitcherToggle}`}
            onClick={() => toggleLanguageDropdown(!languageDropdown)}
          >
            <img src={flags[locale]} />
            <span className={styles.currentLocale}>{flagLanguage[locale]}</span>
          </button>
          <ul className={styles.languagesListDropdown}>
            <li>
              <button
                className={styles.languageSwitcherButton}
                onClick={() => dispatch(languageAction.changeLanguage('en'))}
              >
                <img src={flags.en} className={styles.flag} />
                <span className={styles.currentLocale}>English</span>
              </button>
            </li>
            <li>
              <button
                className={styles.languageSwitcherButton}
                onClick={() => dispatch(languageAction.changeLanguage('hi'))}
              >
                <img src={flags.hi} className={styles.flag} />
                <span>हिन्दी</span>
              </button>
            </li>
            <li>
              <button
                className={styles.languageSwitcherButton}
                onClick={() => dispatch(languageAction.changeLanguage('es'))}
              >
                <img src={flags.es} className={styles.flag} />
                <span>Español</span>
              </button>
            </li>
          </ul>
        </div>

        <button aria-label="Cart" className={`${styles.navItem} ${styles.cartButton}`}>
          <CartIcon />
        </button>

        {/* ONLY IF USER LOGGER IN */}
        {/* <button aria-label="Sign In" className={`${styles.navItem} ${styles.profileButton}`}>
          <ProfileIcon />
        </button> */}
      </div>
    </header>
  );
};

export default Navigation;
