import { RECEIVE_CHART_DATA } from '../actions/chart-action';

const initialState = {
	reducerChartData: [],
	isFetched: false
}

export const chartReducer = (state=initialState, action) => {
	switch(action.type) {
		case RECEIVE_CHART_DATA:
			return Object.assign({}, state, {
				isFetched: true,
				reducerChartData: action.payload
			});
		default:
			return state;
	}
}