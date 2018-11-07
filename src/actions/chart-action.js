import axios from 'axios';
import ReduxThunk from 'redux-thunk';

export const REQUEST_CHART_DATA = 'REQUEST_CHART_DATA';
export function requestChartData(symbol) {
	return function (dispatch) {
		const getChartData = axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1d`)
				.then(response => {
					dispatch({
						type: RECEIVE_CHART_DATA,
						payload: response.data
					});
					console.log(`getChartData() inside chart-action.`);
					return;
				})
				.catch(error => {
					console.log(error);
					return;
				});
	}
}

export const RECEIVE_CHART_DATA = 'RECEIVE_CHART_DATA';