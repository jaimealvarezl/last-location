import React from 'react';
import styles from './avatar.module.scss';

function Avatar(props) {
  const { children } = props;

  return (
    <div className={styles.avatar}>
      {children}
    </div>
  );
}


export default Avatar;
