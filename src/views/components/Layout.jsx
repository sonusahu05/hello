import React from 'react';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Your other layout components */}
      {children}
      <ScrollToTop />
    </div>
  );
};

export default Layout;
