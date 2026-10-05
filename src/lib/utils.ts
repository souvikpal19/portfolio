import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const RESUME_PATH = `${BASE_PATH}/resume.pdf`;

