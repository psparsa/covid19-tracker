import { initialStateType } from "./reducerInitialState";

type actionType =
  | {
      type: "setLoading";
    }
  | {
      type: "setData";
      payload: {
        cases: number;
        recovered: number;
        deaths: number;
        flagPath: string;
      };
    };

function reducer(state: initialStateType, action: actionType) {
  switch (action.type) {
    case "setLoading":
      return {
        ...state,
        isLoading: true,
      };
    case "setData":
      return {
        ...action.payload,
        isLoading: false,
      };
  }
}

export default reducer;