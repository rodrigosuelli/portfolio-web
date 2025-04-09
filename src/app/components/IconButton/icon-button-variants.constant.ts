import clsx from 'clsx';

import styles from './IconButton.module.scss';

export const iconButtonVariants = {
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
