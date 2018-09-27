import axios from 'axios';

export const GET_SYMBOLS_LIST = 'GET_SYMBOLS_LIST';
export function getSymbolsList() {
	axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
		.then(response => {
			return {
				type: GET_SYMBOLS_LIST,
				payload: response.data
			}
		})
		.catch(error => console.log(error));
}

export const GO_TO_STOCK = 'GO_TO_STOCK';
export function goToStock() {
	
}