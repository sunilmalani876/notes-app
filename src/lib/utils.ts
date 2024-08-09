import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractColorCode = (input: string): string | null => {
  // Regular expression to match color codes in various formats
  const match = input.match(/#([a-fA-F0-9]{6})/);
  return match ? `#${match[1]}` : null;
};
