import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * CSS `text-transform: uppercase` keeps the tonos on Greek vowels (e.g. "ό" → "Ό"),
 * which is invalid Greek typography. Locale-aware uppercasing strips it correctly.
 */
export function upperEl(text: string) {
  return text.toLocaleUpperCase("el-GR");
}
