# Notes

## Wireframes
- [Market View grid view](https://wireframe.cc/6lapy6)
- [Market View list view](https://wireframe.cc/8Wsa4O)

## User Journeys
- [Sign In and Sign Up](https://www.lucidchart.com/invitations/accept/dae4e0fd-db98-48dc-9092-f87c8990c82d)
- [Buy and Sell](https://www.mindmeister.com/1142330199?t=X3o3zAO1xb)

## Data Model
- [Data Model](https://www.lucidchart.com/invitations/accept/6ab09332-d4c5-4a83-97a5-d060cb08eeef)

## Frontend AJAX Routes
- DJI: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=DJI&interval=1min&apikey=IW8F5CSHHERNMNBG`
- SPX: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=SPX&interval=1min&apikey=IW8F5CSHHERNMNBG`
- IWM: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IWM&interval=1min&apikey=IW8F5CSHHERNMNBG`
- Most active: `https://api.iextrading.com/1.0/stock/market/list/mostactive`
- Gainers: `https://api.iextrading.com/1.0/stock/market/list/gainers`
- Losers: `https://api.iextrading.com/1.0/stock/market/list/losers`
- Profile batch: `https://api.iextrading.com/1.0/stock/aapl/batch?types=price,quote,news,earnings,stats,chart&range=1m&last=10`

## CSS Libraries
### React-specific npm packages
- [Bootstrap React]()
- [React-bulma-components](https://github.com/couds/react-bulma-components)
### General
- [Notes on including Bootstrap](https://github.com/facebook/create-react-app/issues/201)
- [Notes on adding CSS preprocessor](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
- [PostCSS](https://github.com/postcss/postcss) - similar to Sass and Scss, major overlaps


## Data APIs
- [IEX API docs](https://iextrading.com/developer/docs/#getting-started)
    - [IEX Node wrapper](https://github.com/bilalq/iex-api)
- [Alpha Vantage API docs](https://www.alphavantage.co/documentation/)
- [Dow Jones DNA API docs](https://developer.dowjones.com/site/global/develop/introduction/index.gsp)
- [SEC developer resources](https://www.sec.gov/developer)
- [SEC accessing EDGAR data](https://www.sec.gov/edgar/searchedgar/accessing-edgar-data.htm)

## Quant Libraries
- [Quantopian Zipline](https://github.com/quantopian/zipline)
- [QuantConnect](https://www.quantconnect.com/docs)
- [Quandl](https://docs.quandl.com/docs)
- [StockSharp](https://github.com/StockSharp/StockSharp)
- [Stackexchange discussion on quant platforms](https://quant.stackexchange.com/questions/10905/what-open-source-trading-platform-are-available)

## Trade Lifecycle
- [Ten stages](https://www.allaboutfinancecareers.co.uk/industry/infrastructure/the-trade-life-cycle-explained)
