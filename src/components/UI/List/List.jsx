// @flow
import * as React from 'react';
import clsx from 'clsx';
import styles from './list.module.scss';

type Props = {
  component?: React.ElementType,
  children: Node,
  className?: string
}

function List(props: Props) {
  const { className, children, component: Component } = props;

  return (
    <Component className={clsx(styles.list, className)}>
      {children}
    </Component>
  );
}

List.defaultProps = {
  component: 'ul',
  className: null,
};


export default List;
