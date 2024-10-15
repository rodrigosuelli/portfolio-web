import classNames from 'classnames';
import { forwardRef } from 'react';

import { Slot } from '@radix-ui/react-slot';
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
        className={classNames(styles.button, propsClassNames)}
        ref={ref}
        {...otherProps}
      />
    );
  }
);

export default Button;
