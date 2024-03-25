import type { ReactNode } from 'react';
import { Div } from '.';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

export const Background = (props: IBackgroundProps) => (
  <Div className={props.color}>{props.children}</Div>
);


