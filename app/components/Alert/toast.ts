import { toast, type ToastOptions } from "react-toastify";

export type ToastStatus = "success" | "error" | "warning" | "info";

const defaultOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  rtl: false,
  closeButton: false,
};

export const Toast = (
  status: ToastStatus,
  message: string,
  title?: string,
  options?: ToastOptions,
) => {
  const content = title ? `${title}: ${message}` : message;
  const toastOptions = { ...defaultOptions, ...options };

  switch (status) {
    case "success":
      return toast.success(content, toastOptions);
    case "error":
      return toast.error(content, toastOptions);
    case "warning":
      return toast.warning(content, toastOptions);
    case "info":
      return toast.info(content, toastOptions);
    default:
      return toast(content, toastOptions);
  }
};
