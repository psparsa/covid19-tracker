export interface initialStateType {
  cases: number;
  recovered: number;
  deaths: number;
  flagPath: string;
  isLoading: boolean;
}

const initialState: initialStateType = {
  cases: 0,
  recovered: 0,
  deaths: 0,
  flagPath: "",
  isLoading: true,
};

export default initialState;
