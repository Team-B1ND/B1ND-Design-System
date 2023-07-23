import { Dispatch, SetStateAction } from "react";

export interface SearchBarProps {
  onSubmit?: () => void;
  onChange?: Dispatch<SetStateAction<string>>;
  value: string;
}
