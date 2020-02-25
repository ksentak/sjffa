import axios from 'axios';

let year = '2016';
let leagueID = '23879';
let siteURL = 'https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/'+leagueID+'?seasonId='+year;

export default {
	getAllDataOneSix: function() {
		return axios.get(siteURL).then(res => res.data);
	},
};