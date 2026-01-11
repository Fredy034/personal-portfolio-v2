import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';

const PageContext = createContext();

const getPageFromUrl = () => {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);

  if (segments.length > 1 && segments[0] === 'portfolio') {
    return segments[1];
  }

  if (segments.length === 1 && segments[0] === 'portfolio') {
    return 'about';
  }

  return 'about';
};

export const PageProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(getPageFromUrl());

  useEffect(() => {
    const newPath = `/portfolio/${activePage}`;
    if (window.location.pathname !== newPath) {
      window.history.replaceState({}, '', newPath);
    }
  }, [activePage]);

  return <PageContext.Provider value={{ activePage, setActivePage }}>{children}</PageContext.Provider>;
};

PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePageContext = () => useContext(PageContext);
