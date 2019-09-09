// @flow
import * as React from 'react';
import clsx from 'clsx';
import styles from './item.module.scss';

type Props = {
  component?: React.ElementType,
  children: React.Node,
  className?: string,
  button?: boolean,
  onClick?: Function
}

function ListItem(props: Props) {
  const {
    onClick, button, className, children, component: Component,
  } = props;

  return (
    <Component
      onClick={onClick}
      className={clsx(styles.item, { [styles.button]: button }, className)}
    >
      {children}
    </Component>
  );
}


ListItem.defaultProps = {
  component: 'li',
  className: null,
  button: false,
  onClick: null,
};

export default ListItem;
