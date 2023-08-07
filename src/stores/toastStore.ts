import {atom} from "nanostores";
import type {ToastItemCreateType, ToastItemType} from "../types/toast";

export const toastStore = atom<ToastItemType[]>([])

export const addToast = (data: ToastItemCreateType) => {
  let toastList = [...toastStore.get()];
  const toast = {
    ...data,
    id: new Date().getTime().toString()
  }
  toastList.push(toast)

  toastStore.set(toastList)
  setTimeout(() => {
    removeToast(toast.id)
  }, 3000)
}

export const removeToast = (id: string) => {
  let toastList = [...toastStore.get().filter(item => item.id !== id)]
  toastStore.set(toastList)
}