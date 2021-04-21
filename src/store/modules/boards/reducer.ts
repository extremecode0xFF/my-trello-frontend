export interface BoardsState {
  boards: [];
}

const initialState: BoardsState = {
  boards: [],
};

export default function reducer(state = initialState, action: { type: string }): BoardsState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
