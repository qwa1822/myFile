import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface Imyvarialbes {
  number: number | string;
  title?: string | number;
  writer?: string | number;
  contents?: string | number;
}

export interface IBoardWriteUI {
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
  myWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  myTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  ContentS: (event: ChangeEvent<HTMLInputElement>) => void;
  isEdit: boolean;
  data?: any;
}
