import type { ReactNode } from 'react';
import { Surround } from '.';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

export const Background = (props: IBackgroundProps) => (
  <Surround className={props.color}>{props.children}</Surround>
);


