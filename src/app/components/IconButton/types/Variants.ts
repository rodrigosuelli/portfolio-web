import { iconButtonVariants } from '../icon-button-variants.constant';

// Utility type to infer variants and their respective values
export type Variants = typeof iconButtonVariants.variants;
export type VariantProps<T> = {
  [K in keyof T]?: keyof T[K];
};
