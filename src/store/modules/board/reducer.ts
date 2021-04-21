export interface BoardState {
  users: [];
  lists: [];
}

const initialState: BoardState = {
  users: [],
  lists: [],
};

export default function reducer(state = initialState, action: { type: string }): BoardState {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
}
