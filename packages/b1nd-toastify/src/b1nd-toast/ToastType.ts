import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface B1ndToastType {
  success(message: string): void;
  info(message: string): void;
  error(message: string): void;
  default(message: string): void;
}

class B1ndToastifyAdaptor implements B1ndToastType {
  success(message: string): void {
    toast.success(message, { position: toast.POSITION.TOP_RIGHT });
  }
  info(message: string): void {
    toast.info(message, { position: toast.POSITION.TOP_RIGHT });
  }
  error(message: string): void {
    toast.error(message, { position: toast.POSITION.TOP_RIGHT });
  }
  default(message: string): void {
    toast(message, { position: toast.POSITION.TOP_RIGHT });
  }
}

export default B1ndToastifyAdaptor;
