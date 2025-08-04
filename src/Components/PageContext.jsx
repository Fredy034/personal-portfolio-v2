import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const PageContext = createContext();

const getPageFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('p') || 'about';
};

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(getPageFromUrl());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (activePage !== params.get('p')) {
      params.set('p', activePage);
      const newUrl = `${window.location.pathname}?${params.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  }, [activePage]);

  return <PageContext.Provider value={{ activePage, setActivePage }}>{children}</PageContext.Provider>;
};

PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePageContext = () => useContext(PageContext);
