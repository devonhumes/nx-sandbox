import { first } from "@nx-sandbox/first";

export function second(): string {
  first();
  return 'second';
}
