// @flow
import * as React from 'react';
import clsx from 'clsx';
import styles from './item.module.scss';

type Props = {
  component?: React.ElementType,
  children: React.Node,
  className?: string
}

function ListItem(props: Props) {
  const { className, children, component: Component } = props;

  return (
    <Component className={clsx(styles.item, className)}>
      {children}
    </Component>
  );
}


ListItem.defaultProps = {
  component: 'li',
  className: null,
};

export default ListItem;
