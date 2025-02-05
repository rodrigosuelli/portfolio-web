import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './IconButton.module.scss';

const iconButtonVariants = {
  defaultClassNames: clsx(styles.iconButton),
  variants: {
    size: {
      md: clsx(styles.md),
      lg: clsx(styles.lg),
    },
  },
  defaultVariants: {
    size: 'md',
  },
} as const;

// Utility type to infer variants and their respective values
type Variants = typeof iconButtonVariants.variants;
type VariantProps<T> = {
  [K in keyof T]?: keyof T[K];
};

type IconButtonProps = {
  showTooltip?: boolean;
  tooltipText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<Variants>;

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
