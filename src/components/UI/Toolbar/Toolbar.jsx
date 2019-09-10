// @flow
import * as React from 'react';

import styles from './toolbar.module.scss';

type Props = {
  title: string
}

function Toolbar(props: Props) {
  const { title } = props;

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default Toolbar;
