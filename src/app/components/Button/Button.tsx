import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      asChild = false,
      className: propsClassNames = '',
      ...otherProps
    } = props;
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={clsx(styles.button, propsClassNames)}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Button;
