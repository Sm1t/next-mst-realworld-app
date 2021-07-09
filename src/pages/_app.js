import React from 'react';
import { getSnapshot } from 'mobx-state-tree';
import App from 'next/app';

import { initializeStore, StoreProvider } from '../store';
import { Layout } from '../layout';
import { AuthService } from '../api';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    //
    // Use getInitialProps as a step in the lifecycle when
    // we can initialize our store
    //
    const isServer = typeof window === 'undefined';
    const stores = initializeStore(isServer);
    const token = ctx.req ? ctx.req.cookies.token : AuthService.getToken();

    if (token) {
      await stores.userStore.checkAuth(token);
    }

    //
    // Check whether the page being rendered by the App has a
    // static getInitialProps method and if so call it
    //
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx, stores);
    }
    return {
      initialState: getSnapshot(stores),
      isServer,
      pageProps,
    };
  }

  constructor(props) {
    super(props);
    this.stores = initializeStore(typeof window === 'udefined', props.initialState);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StoreProvider stores={this.stores}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreProvider>
    );
  }
}
