import classNames from 'classnames';
import { forwardRef } from 'react';

import styles from './IconButton.module.scss';

const iconButtonVariants = {
  defaultClassNames: classNames(styles.iconButton),
  variants: {
    size: {
      md: classNames(styles.md),
      lg: classNames(styles.lg),
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

export type IconButtonProps = {
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
        className={classNames(
          iconButtonVariants.defaultClassNames,
          iconButtonVariants.variants.size[size],
          propsClassNames
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-8 rounded-lg bg-gray-200 px-2 py-1 text-sm">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

export default IconButton;
