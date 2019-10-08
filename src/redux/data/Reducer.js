import { GET_HOME_DATA } from "./Action";
const initialState = {
    data: { }
};
export default function user (state = initialState, action) {
    switch (action.type) {
        case GET_HOME_DATA: {
            break;

        }
        default:
    }
    return state;
}
