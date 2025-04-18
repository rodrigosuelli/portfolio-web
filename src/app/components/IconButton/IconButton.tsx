import clsx from 'clsx';
import { forwardRef } from 'react';
import { iconButtonVariants } from './icon-button-variants.constant';
import { IconButtonBaseProps } from './types/IconButtonBaseProps';

import styles from './IconButton.module.scss';

type IconButtonProps = IconButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    const {
      size = iconButtonVariants.defaultVariants.size,
      showTooltip = false,
      tooltipText = '',
      children,
      className: propsClassNames = '',
      ...otherProps
    } = props;

    return (
      <button
        type="button"
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
      </button>
    );
  }
);

export default IconButton;
