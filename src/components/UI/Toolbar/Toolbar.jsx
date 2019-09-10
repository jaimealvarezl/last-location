// @flow
import * as React from 'react';
import styles from './toolbar.module.scss';

type Props = {
  children: React.Node
}

function Toolbar(props: Props) {
  const { children } = props;

  return (
    <div className={styles.toolbar}>
      {children}
    </div>
  );
}

export default Toolbar;
