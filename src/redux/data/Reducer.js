import { GET_HOME_DATA } from "./Action";
export default function user (state = { }, action) {
    switch (action.type) {
        case GET_HOME_DATA: {
            console.log('reducer')
            break;

        }
        default:
    }
    return state;
}
