import axios from 'axios';

let base = 'https://fantasy.espn.com/apis/v3/games/ffl/seasons/';
let year = '2019';
let mid = '/segments/0/leagues/';
let leagueID = '23879';
let tail =
	'?view=mDraftDetail&view=mLiveScoring&view=mMatchupScore&view=mPendingTransactions&view=mPositionalRatings&view=mSettings&view=mTeam&view=modular&view=mNav&view=mMatchupScore';
let siteURL = base + year + mid + leagueID + tail;

export default {
	getAllData: function() {
		return axios.get(siteURL).then(res => res.data);
	},
};
