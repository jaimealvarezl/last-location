// @flow
import * as React from 'react';
import clsx from 'clsx';
import styles from './avatar.module.scss';


type Props = {
  children?: React.Element,
  src?: string,
  alt?: string,
  component?: string,
  className?: string
}

function Avatar(props: Props) {
  const {
    component: Component, src, alt, children: childrenProp, className: classNameProp,
  } = props;

  let children = null;
  if (src) {
    children = <img src={src} alt={alt} />;
  } else {
    children = childrenProp;
  }


  return (
    <Component className={clsx(styles.avatar, { [styles.avatarDefault]: !src }, classNameProp)}>
      {children}
    </Component>
  );
}

Avatar.defaultProps = {
  src: null,
  alt: null,
  component: 'div',
  className: null,
  children: null,
};

export default Avatar;
