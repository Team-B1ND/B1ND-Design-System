import { Dispatch, SetStateAction } from "react";

export interface InputProps {
  onSubmit?: () => void;
  onChange?: Dispatch<SetStateAction<string>>;
  value: string;
}
