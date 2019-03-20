import React, { Fragment } from 'react';
import Head from 'next/head';

import Header from './Header';

const Layout = ({ children }) => (
  <Fragment>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="//demo.productionready.io/main.css" />
    </Head>
    <Header />
    {children}
  </Fragment>
);

export default Layout;
