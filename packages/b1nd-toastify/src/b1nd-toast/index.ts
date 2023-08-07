import B1ndToastifyAdaptor, { B1ndToastType } from "./ToastType";

class B1ndToastService {
  constructor(private toastService: B1ndToastType) {}

  public showSuccess(message: string) {
    this.toastService.success(message);
  }

  public showError(message: string) {
    this.toastService.error(message);
  }

  public showInfo(message: string) {
    this.toastService.info(message);
  }
}

export const B1ndToast = new B1ndToastService(new B1ndToastifyAdaptor());
