import { FORM_DATA } from "../actions/actions";

const initialState = {
  formulario: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log(`Action recibida por el reducer: `,type, payload);
  switch (type) {
    case FORM_DATA: return{
      ...state,
      formulario:payload
    }
    default: return{
      ...state
    }
  }
};

export default rootReducer;
