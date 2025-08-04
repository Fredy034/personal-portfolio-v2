import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState('about');

  return (
    <PageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </PageContext.Provider>
  );
};

PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePageContext = () => useContext(PageContext);
