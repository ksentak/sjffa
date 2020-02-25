import axios from 'axios';

let base = 'https://fantasy.espn.com/apis/v3/games/ffl/seasons/';
let year = '2019';
let mid = '/segments/0/leagues/';
let leagueID = '23879';
let tail =
	'?view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mSettings&view=mTeam&view=modular&view=mNav&view=mMatchupScore';
let siteURL = base + year + mid + leagueID + tail;

axios
	.get(siteURL)
	.then(function(res) {
		// handle success
		// console.log(res.data)

		let teams = [];

		for (let i = 0; i < res.data.teams.length; i++) {
			let teamName = res.data.teams[i].location + ' ' + res.data.teams[i].nickname;
			let teamWins = res.data.teams[i].record.overall.wins;
			let teamLosses = res.data.teams[i].record.overall.losses;
			let teamRecord = teamWins + '-' + teamLosses;
			let pointsExact = res.data.teams[i].points;
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

		console.log(teams);
	})
	.catch(function(err) {
		// handle error
		console.log(err);
	});
