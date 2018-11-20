import React from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './PortfolioContainer.css';

export default class PortfolioContainer extends React.Component {
	constructor(props) {
		super(props)
		const currentDate = new Date();
		const dayAgo = new Date(new Date().setDate(currentDate.getDate() - 1));
		const weekAgo = new Date(new Date().setDate(currentDate.getDate() - 7));
		const monthAgo = new Date(new Date().setDate(currentDate.getDate() - 30));
		const yearAgo = new Date(new Date().setDate(currentDate.getDate() - 365));

		this.state = {
			currentDate: currentDate.toString(),
			value: 1000000,
			dayAgo: dayAgo.toString(),
			weekAgo: weekAgo.toString(),
			monthAgo: monthAgo.toString(),
			rows: [],
			columns: []
		};
		
		axios.get(`http://localhost:8080/portfolio/${localStorage.token}`, {
			account: localStorage.getItem('userId')
		})
				.then(response => {
					//console.log(`PortfolioContainer getPortfolio: ${JSON.stringify(response)}`);
					let rows = [];
					let id = 0;
					for (let key in response.data) {
						// skip loop if the property is from prototype
						if (!response.data.hasOwnProperty(key)) continue;
						let columns = ['Symbol', 'Name', 'Value', 'Shares Owned', 'Trades Made', 'Transactions'];
						this.setState({
							columns: columns
						})
						let row = {};
						let obj = response.data[key];
						row.id = id;
						row.symbol = key;
						row.name = obj.name;
						row.value = obj.totalValue;
						row.shares = obj.quantity;
						row.trades = obj.trades;
						//row.transactions = obj.transactions;
						rows.push(row);
						id++;
						//console.log(`collection: ${JSON.stringify(collection)}`)
					}
					this.setState({
						rows: rows
					});
				});
	}

	render() {
		return (
			<div className="portfolio">
				<h2>Portfolio</h2>
			<Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell numeric>Symbol</TableCell>
            <TableCell numeric>Value</TableCell>
            <TableCell numeric>Shares Owned</TableCell>
            <TableCell numeric>Trades Made</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell numeric>{row.symbol}</TableCell>
                <TableCell numeric>{row.value}</TableCell>
                <TableCell numeric>{row.shares}</TableCell>
                <TableCell numeric>{row.trades}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
			</div>
		)
	}
}
	// TODO
	// It should display portfolio return by showing 
	// (currentPortfolioValue / ${pastDate}PorfolioValue) - 1
	// ??? How to get portfolio value at a specific date?
	// for each stock in portfolio:
	// 	call IEX for historical price
	// 	historicalHoldinValue = price * quantity
	// sum historicalHoldingValue of all stocks
	// (currentHoldingValue / historicalHoldingValue) - 1

	// compare to:
// 1 day ago
// 7 days ago
// 30 days ago
// 365 days ago

// Portfolio
// Keep data in transaction database collection
// find in Transaction collection and process in frontend

// Relationship between Portfolio and Account
// Which one to use?
// Portfolio should belong to Account in database with Account _id reference
// Account should get a Portfolio _id 