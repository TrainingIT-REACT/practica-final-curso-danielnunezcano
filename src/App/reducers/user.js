import {UPDATE_USERNAME} from '../actions/types';

const initialState = {
	nameUser: ""
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USERNAME:
			return {
				nameUser: action.nameUser
			};
		default:
			return state;
	}
};

export default user;
