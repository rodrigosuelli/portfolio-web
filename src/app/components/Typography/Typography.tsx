import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './Typography.module.scss';

type TypographyVariantsType = Record<
  string,
  {
    classes: string;
    element: 'h1' | 'h2' | 'h3' | 'p';
  }
>;

const typographyVariants = {
  heading1: {
    classes: clsx(styles.heading1),
    element: 'h1',
  },
  heading2: {
    classes: clsx(styles.heading2),
    element: 'h2',
  },
  heading3: {
    classes: clsx(styles.heading3),
    element: 'h3',
  },
  subtitle: { classes: clsx(styles.subtitle), element: 'p' },
  body1: { classes: clsx(styles.body1), element: 'p' },
  body2: { classes: clsx(styles.body2), element: 'p' },
  body3: { classes: clsx(styles.body3), element: 'p' },
} as const satisfies TypographyVariantsType;

type TypographyCompProps = {
  variant: keyof typeof typographyVariants;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

type RefType = HTMLHeadingElement | HTMLParagraphElement;

const Typography = forwardRef<RefType, TypographyCompProps>(
  function Typography(props, ref) {
    const {
      variant,
      children,
      className: propsClassNames = '',
      ...otherProps
    } = props;
    const { classes, element: Element } = typographyVariants[variant];

    return (
      <Element
        ref={ref}
        className={clsx(classes, propsClassNames)}
        {...otherProps}
      >
        {children}
      </Element>
    );
  }
);

export default Typography;
