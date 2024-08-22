import classNames from 'classnames';
import styles from './Typography.module.scss';

const overwriteFontStylesOptions = {
  bold: classNames(styles.bold),
  semiBold: classNames(styles.semiBold),
  medium: classNames(styles.medium),
  underline: classNames(styles.underline),
};

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
} satisfies TypographyVariantsType;

type TypographyProps = {
  variant: keyof typeof typographyVariants;
  children: React.ReactNode;
};

export default function Typography({ variant, children }: TypographyProps) {
  const { classes, element: Element } = typographyVariants[variant];

  return <Element className={classes}>{children}</Element>;
}
