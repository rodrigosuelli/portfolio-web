import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { iconButtonVariants } from './icon-button-variants.constant';
import { IconButtonBaseProps } from './types/IconButtonBaseProps';

import styles from './IconButton.module.scss';

type IconLinkProps = IconButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps;

const IconLink = forwardRef<HTMLAnchorElement, IconLinkProps>(
  function IconLink(props, ref) {
    const {
      size = iconButtonVariants.defaultVariants.size,
      showTooltip = false,
      tooltipText = '',
      children,
      className: propsClassNames = '',
      ...otherProps
    } = props;

    return (
      <Link
        className={clsx(
          iconButtonVariants.defaultClassNames,
          iconButtonVariants.variants.size[size],
          propsClassNames
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className={clsx(styles.tooltip)}>{tooltipText}</span>
        )}
      </Link>
    );
  }
);

export default IconLink;
