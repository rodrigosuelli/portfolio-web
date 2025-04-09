import { VariantProps, Variants } from './Variants';

export type IconButtonBaseProps = {
  showTooltip?: boolean;
  tooltipText?: string;
} & VariantProps<Variants>;
