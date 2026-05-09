import clsx from 'clsx';
import Typography from '../Typography/Typography';

import styles from './Chip.module.scss';

type ChipProps = {
  label: string;
};

export default function Chip(props: ChipProps) {
  return (
    <div className={clsx(styles.chip)}>
      <Typography variant="body3">{props.label}</Typography>
    </div>
  );
}
