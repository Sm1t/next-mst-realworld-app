import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({
  router,
  children,
  className,
  activeClassName,
  ...props
}) => {
  if (router.pathname === props.href && activeClassName) {
    className = `${className || ''} ${activeClassName}`.trim();
  }

  return (
    <Link {...props}>
      <a {...{ className }}>
        {children}
      </a>
    </Link>
  );
};

export default withRouter(ActiveLink);
