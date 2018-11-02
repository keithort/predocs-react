import { NEXT_PAGE, PREVIOUS_PAGE } from "./types";

export function getNextPage() {
  return {
    type: NEXT_PAGE
  };
}

export function getPreviousPage() {
  return {
    type: PREVIOUS_PAGE
  };
}
