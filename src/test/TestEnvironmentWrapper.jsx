import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import appLanguage from '../lang/appLanguage';
import Store from '../redux/store';

const TestEnvironmentWrapper = ({ children }) => {
  return (
    <Router>
      <Provider store={Store}>
        <IntlProvider locale="en" messages={appLanguage['en']}>
          {children}
        </IntlProvider>
      </Provider>
    </Router>
  );
};

export default TestEnvironmentWrapper;
