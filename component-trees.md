# Component Trees
## Container Components
### Dashboard
```javascript
Dashboard {
	MarketData: [
			...{
				marketIndex: String,
				chart: {},
				textData: String
			}
	],
	CustomDataSelections: [
		...{
			name: 'MostActive',
			memberStocks: [
				...{
					symbol: String,
					chart: {}
				}
			] 
		},
		{
			name: 'MyPortfolio',
			MemberStocks: [
				{
					symbol: Account.Portfolio[i].symbol,

				}
			]
		}
	]
}
```
### Account
```javascript
Account {
	email: String,
	password: String,
	Portfolio {
		[
			... {
				symbol: String,
				name: String,
				quantity: Number,
				price: Number,
				totalValue: Number
			}
		]
	}
}
```
### Stock
```javascript
Stock {
	DisplayData {
		chart: {},
		textData: {
			symbol: String,
			name: String,
			price: Number
		}
	}
	Transaction {
		date: Date,
		symbol: String,
		name: String,
		type: String,
		quantity: Number,
		price: Number,
		totalValue: Number,
		execute: false
	}
}
```

## Presentation Components
Main, Header, Footer, Landing, Home

### 2018-09-26
#### `Transaction` and `Stock` relationships
- Buy and sell request executions should occur in `Transaction` instead of `Stock`.
- Transaction can be: 
	- `current`, referring to the buy or sell request currently being executed; or
	- `historical`, referring to requests executed in the past.
- `Transaction` should be a slave/child of `Stock`
#### `Portfolio`: consider making a dictionary with symbols as keys
- Dictionary:
```javascript
Portfolio: {
	'aapl': {
		name: 'Apple Inc.',
		price: Number,
		quantity: Number,
		totalValue: price * quantity
	},
	'fb': {
		name: 'Facebook Inc.',
		...
	}
}
```
	- Sorting: sorting an array of keys (`Portfolio.keys()`) is cheaper than sorting an array of objects
	- Searching: will be able to find out what stock I hold by Portfolio.keys()
	- Will not have to traverse an array every time I need data from a single stock.
	- Will not have to declare a `symbol` in the stock
- Array:
```javascript
Portfolio: [
	...{
		symbol: 'aapl',
		name: 'Apple Inc.'
		...
	},
	{
		symbol: 'fb',
		name: 'Facebook Inc.',
		...
	}
]
```