// @flow
import * as React from 'react';
import styles from './avatar.module.scss';


type Props = {
  children: React.Element
}

function Avatar(props: Props) {
  const { children } = props;

  return (
    <div className={styles.avatar}>
      {children}
    </div>
  );
}


export default Avatar;
