import { FETCH_NAVIGATION, NEXT_PAGE, PREVIOUS_PAGE } from "../Actions/types";

const INITIAL_STATE = {
  nav: [
    {
      label: "Statement of Identity",
      step: 0
    },
    {
      label: "Professional Information",
      step: 1
    },
    {
      label: "Lender Information",
      step: 2
    },
    {
      label: "Homeowners Association",
      step: 3
    },
    {
      label: "Additional Information",
      step: 4
    },
    {
      label: "Funds Distribution",
      step: 5
    },
    {
      label: "Wire Instructions",
      step: 6
    },
    {
      label: "Important Documents",
      step: 7
    },
    {
      label: "Additional Documents",
      step: 8
    }
  ],
  step: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_NAVIGATION:
      return [...state.nav];

    case NEXT_PAGE:
      let next = state.step + 1;
      return { ...state, step: next };

    case PREVIOUS_PAGE:
      const prev = state.step - 1;
      return { ...state, step: prev };

    default:
      return state;
  }
}
