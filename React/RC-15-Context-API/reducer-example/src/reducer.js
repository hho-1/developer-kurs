export const initialState = {
  loading: false,
  dog: "",
  error: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, dog: action.payload, error: "" };
    case "SUCCESS":
      return { ...state, loading: false, dog: "", error: action.payload };
    default:
      break;
  }
};
