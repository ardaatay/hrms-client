import { UPDATE_COUNT } from "../actions/updateAction";
import { count } from "../initialValues/updateItems";

const initialState = {
    count: count,
};

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case UPDATE_COUNT:
            return {
                ...state,
                count: state.count + payload,
            };

        default:
            return state;
    }
}
