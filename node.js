const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = 'jarnetu1';
var password = 'Qweqwe1q1';
var shared_secret = '';

var games = [440, 730, 7, 753, 252490, 570, 20510, 1003360, 220, 287390, 238320, 286690, 620, 219150, 38600, 550, 967250, 11250, 219640, 281750, 363610, 203160, 575630, 481600, 555410, 2500, 395400, 418610, 485450, 424000, 449760, 1070330, 806100, 845730, 527770, 50300, 265930, 207610, 1612140, 1544510, 1306790, 1830870, 1440050, 1531840, 1599250, 1152810, 1583570, 1031920, 1572810, 314280, 240];
var status = 1;


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});