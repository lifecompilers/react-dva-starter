import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to React Dva Starter!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li><a href={(process.env.PUBLIC_URL?process.env.PUBLIC_URL:'') + '/#/products/'}>Demo</a></li>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
