// @flow

import * as React from 'react';
import clsx from 'clsx';
import styles from './avatar.module.scss';

type Props = {
  className?: string,
  children: React.Node
}

function ListItemAvatar(props: Props) {
  const { className, children } = props;

  return (
    <div className={clsx(styles.avatar, className)}>
      {children}
    </div>
  );
}

ListItemAvatar.defaultProps = {
  className: null,
};

export default ListItemAvatar;
