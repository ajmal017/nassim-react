const initialState = {
	transactions: []
}
// State has to be defined before entering the reducer
const transactionReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'GETALLTRANSACTIONS':
			console.log(action.payload);
			break;
		default: // if no actions are taken
			return state;
	}
}