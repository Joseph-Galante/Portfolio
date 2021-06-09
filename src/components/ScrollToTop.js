// react
import { useEffect } from 'react';
// react router
import { withRouter } from 'react-router-dom';

// used to scroll to the top of the page on every route change
function ScrollToTop() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default ScrollToTop;