/**
 * Card component props
 * @type
 */
export type ProjectProps = {
  title: string;
  url: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  username: string;
};

/**
 * DotPattern component props
 * @interface
 */
export interface IDotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  [key: string]: number | string | undefined;
}
