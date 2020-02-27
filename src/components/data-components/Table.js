import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import API from '../../utils/API';

class DataTable extends Component {
	state = {
		teamZero: '',
		teamOne: '',
		teamTwo: '',
		teamThree: '',
		teamFour: '',
		teamFive: '',
		teamSix: '',
		teamSeven: '',
		teamEight: '',
		teamNine: '',
		rows: [],
	};

	componentDidMount() {
		API.getAllData()
			.then(res => {
				let teams = [];

				for (let i = 0; i < res.teams.length; i++) {
					let teamName = res.teams[i].location + ' ' + res.teams[i].nickname;
					let teamWins = res.teams[i].record.overall.wins;
					let teamLosses = res.teams[i].record.overall.losses;
					let teamRecord = teamWins + '-' + teamLosses;
					let pointsExact = res.teams[i].points;
					let teamPoints = pointsExact.toFixed(2);

					let addTeam = {
						name: teamName,
						wins: teamWins,
						losses: teamLosses,
						record: teamRecord,
						points: teamPoints,
					};

					teams.push(addTeam);
				}

				let team0 = teams[0];
				let team1 = teams[1];
				let team2 = teams[2];
				let team3 = teams[3];
				let team4 = teams[4];
				let team5 = teams[5];
				let team6 = teams[6];
				let team7 = teams[7];
				let team8 = teams[8];
				let team9 = teams[9];

				this.setState({
					teamZero: team0,
					teamOne: team1,
					teamTwo: team2,
					teamThree: team3,
					teamFour: team4,
					teamFive: team5,
					teamSix: team6,
					teamSeven: team7,
					teamEight: team8,
					teamNine: team9,
				});

				function createData(name, record, points, wins, losses) {
					return { name, record, points, wins, losses };
				}
		
				const rowsState = [
					// Team 0
					createData(
						this.state.teamZero.name,
						this.state.teamZero.record,
						this.state.teamZero.points,
						this.state.teamZero.wins,
						this.state.teamZero.losses,
					),
					// Team 1
					createData(
						this.state.teamOne.name,
						this.state.teamOne.record,
						this.state.teamOne.points,
						this.state.teamOne.wins,
						this.state.teamOne.losses,
					),
					// Team 2
					createData(
						this.state.teamTwo.name,
						this.state.teamTwo.record,
						this.state.teamTwo.points,
						this.state.teamTwo.wins,
						this.state.teamTwo.losses,
					),
					// Team 3
					createData(
						this.state.teamThree.name,
						this.state.teamThree.record,
						this.state.teamThree.points,
						this.state.teamThree.wins,
						this.state.teamThree.losses,
					),
					// Team 4
					createData(
						this.state.teamFour.name,
						this.state.teamFour.record,
						this.state.teamFour.points,
						this.state.teamFour.wins,
						this.state.teamFour.losses,
					),
					// Team 5
					createData(
						this.state.teamFive.name,
						this.state.teamFive.record,
						this.state.teamFive.points,
						this.state.teamFive.wins,
						this.state.teamFive.losses,
					),
					// Team 6
					createData(
						this.state.teamSix.name,
						this.state.teamSix.record,
						this.state.teamSix.points,
						this.state.teamSix.wins,
						this.state.teamSix.losses,
					),
					// Team 7
					createData(
						this.state.teamSeven.name,
						this.state.teamSeven.record,
						this.state.teamSeven.points,
						this.state.teamSeven.wins,
						this.state.teamSeven.losses,
					),
					// Team 8
					createData(
						this.state.teamEight.name,
						this.state.teamEight.record,
						this.state.teamEight.points,
						this.state.teamEight.wins,
						this.state.teamEight.losses,
					),
					// Team 9
					createData(
						this.state.teamNine.name,
						this.state.teamNine.record,
						this.state.teamNine.points,
						this.state.teamNine.wins,
						this.state.teamNine.losses,
					),
				];
		
				this.setState({
					rows: rowsState,
				});
		
				console.log(this.state.rows)

			})
			.catch(function(err) {
				// Handle Error
				console.log(err);
			});

		// function descendingComparator(a, b, orderBy) {
		// 	if (b[orderBy] < a[orderBy]) {
		// 		return -1;
		// 	}
		// 	if (b[orderBy] > a[orderBy]) {
		// 		return 1;
		// 	}
		// 	return 0;
		// }

		// function getComparator(order, orderBy) {
		// 	return order === 'desc'
		// 		? (a, b) => descendingComparator(a, b, orderBy)
		// 		: (a, b) => -descendingComparator(a, b, orderBy);
		// }

		// function stableSort(array, comparator) {
		// 	const stabilizedThis = array.map((el, index) => [el, index]);
		// 	stabilizedThis.sort((a, b) => {
		// 		const order = comparator(a[0], b[0]);
		// 		if (order !== 0) return order;
		// 		return a[1] - b[1];
		// 	});
		// 	return stabilizedThis.map(el => el[0]);
		// }

		// const headCells = [
		// 	{ id: 'name', numeric: false, disablePadding: true, label: 'Team Name' },
		// 	{ id: 'record', numeric: false, disablePadding: false, label: 'Record' },
		// 	{
		// 		id: 'points',
		// 		numeric: true,
		// 		disablePadding: false,
		// 		label: 'Points Scored',
		// 	},
		// 	{ id: 'wins', numeric: true, disablePadding: false, label: 'Wins' },
		// 	{ id: 'loses', numeric: true, disablePadding: false, label: 'Loses' },
		// ];

		// // Causes Error
		// function EnhancedTableHead(props) {
		// 	const {
		// 		classes,
		// 		onSelectAllClick,
		// 		order,
		// 		orderBy,
		// 		numSelected,
		// 		rowCount,
		// 		onRequestSort,
		// 	} = props;
		// 	const createSortHandler = property => event => {
		// 		onRequestSort(event, property);
		// 	};
		// }
	}

	render() {
		return (
			<TableContainer component={Paper}>
				<Table className='recordTable' aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='center'>Team Name</TableCell>
							<TableCell align='center'>Record</TableCell>
							<TableCell align='center'>Points Scored</TableCell>
							<TableCell align='center'>Wins</TableCell>
							<TableCell align='center'>Losses</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{this.state.rows.map(row => (
							<TableRow key={row.name}>
								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='center'>{row.record}</TableCell>
								<TableCell align='center'>{row.points}</TableCell>
								<TableCell align='center'>{row.wins}</TableCell>
								<TableCell align='center'>{row.losses}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	}
}

export default DataTable;
