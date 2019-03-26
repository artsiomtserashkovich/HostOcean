import { handleActions } from "redux-actions";

import * as eventsActions from "../actions/eventsActions";

const initialState = {
};

export default handleActions(
    {
        [eventsActions.getEventsSuccess]: (state, action) => {
            const newState = { ...initialState };
            action.response.data.forEach(event => newState[event.laboratoryWorkId] = event.laboratoryWork);
            return { ...newState }
        }
    },
    initialState
);