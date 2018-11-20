// Container component?
import React from 'react';
import './TransactionContainer.css';
import Transaction from '../transaction/Transaction';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { requestTransactionHistory } from '/Users/Leo/nassim-react/src/actions/transaction-action';

class TransactionContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transactions: [],
			account: localStorage.getItem('userId'),
			rows: []
		}
	}

	componentDidMount() {
		debugger
		this.props.requestTransactionHistory();
	}
	
	render() {
		const rows = []
		const transactions = this.props.transactionData.reducerTransactionData.map((entry, index) => {
			entry.id = index;
			rows.push(entry);
		});
		return (
			<div>
				<h2>Transaction History</h2>
				<div className="container">
				<Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell numeric>Name</TableCell>
            <TableCell numeric>Symbol</TableCell>
            <TableCell numeric>Type</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Shares</TableCell>
            <TableCell numeric>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell numeric>{row.name}</TableCell>
                <TableCell numeric>{row.symbol}</TableCell>
                <TableCell numeric>{row.type}</TableCell>
                <TableCell numeric>{row.price}</TableCell>
                <TableCell numeric>{row.quantity}</TableCell>
                <TableCell numeric>{row.totalValue.toFixed(2)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
				</div>
			</div>
		)
	}
}
// Connects transactionReducer to `this`
// rootReducerReduxState is the state that is created in App.js
// rootReducerReduxState is the `rootReducer` variable from store.js
// mapping Redux state to component props
const mapStateToProps = (rootReducerReduxState) => { // ??? is this the `state` or the `rootReducer`?
	return {
		// ??? Are these statements correct?
		// state.transaction is from rootReducer in store.js
		// store.js is connected to this script through Provider
		// Provider encapsulates this Component
		// the key can be named anything
		// transactionData is the state in this.props
		transactionData: rootReducerReduxState.transactionReducer
	}
}
// ??? why am I not using this?
// const mapDispatchToProps = () => {}

// connect(mapStateToProps) connects Redux state to component
// first param `mapStateToProps` connect "mapping of Redux state to component pros" to the `TransactionContainer` component
// second param `{requestTransactionHistory}` connect `requestTransactionHistory` action to `TransactionContainer` component
export default connect(mapStateToProps, { requestTransactionHistory })(TransactionContainer)
// store’s dispatch method is automatically provided as a prop
// `export` is exporting the component for use