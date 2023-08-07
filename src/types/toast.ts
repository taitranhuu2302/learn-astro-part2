type ToastType = 'success' | 'error' | 'warning' | 'info'

export type ToastItemType = {
  id: string;
  message: string;
  type: ToastType;
}

export type ToastItemCreateType = {
  message: string;
  type: ToastType;
}