import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

export type categoriesTypes = {
  [x: string]: any;
  release_date: string | any[];
  poster_path: any;
  title:
  | string
  | number
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | ReactPortal;
};