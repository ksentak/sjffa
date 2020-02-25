import axios from 'axios';

let year = '2018';
let leagueID = '23879';
let siteURL = 'https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/'+leagueID+'?seasonId='+year;

export default {
	getAllDataOneEight: function() {
		return axios.get(siteURL).then(res => res.data);
	},
};