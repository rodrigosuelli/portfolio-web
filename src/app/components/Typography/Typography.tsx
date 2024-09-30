import classNames from 'classnames';
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
    classes: classNames(styles.heading1),
    element: 'h1',
  },
  heading2: {
    classes: classNames(styles.heading2),
    element: 'h2',
  },
  heading3: {
    classes: classNames(styles.heading3),
    element: 'h3',
  },
  subtitle: { classes: classNames(styles.subtitle), element: 'p' },
  body1: { classes: classNames(styles.body1), element: 'p' },
  body2: { classes: classNames(styles.body2), element: 'p' },
  body3: { classes: classNames(styles.body3), element: 'p' },
} as const satisfies TypographyVariantsType;

type TypographyCompProps = {
  variant: keyof typeof typographyVariants;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement>;

type RefType = HTMLHeadingElement | HTMLParagraphElement;

const Typography = forwardRef<RefType, TypographyCompProps>(
  // eslint-disable-next-line prefer-arrow-callback
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
        className={classNames(classes, propsClassNames)}
        {...otherProps}
      >
        {children}
      </Element>
    );
  }
);

export default Typography;
