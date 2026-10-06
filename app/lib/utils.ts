export function classNames(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function toTelHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toWhatsAppHref(numberE164NoSpaces: string, message: string) {
  const base = "https://wa.me/";
  const encoded = encodeURIComponent(message);
  return `${base}${numberE164NoSpaces.replace(/\+/g, "")}?text=${encoded}`;
}
