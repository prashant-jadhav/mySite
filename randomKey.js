var divIds = ['0', '1', '2', '3', '4'];
var markup = '';
var markupStart = '<div style="padding:2px 3px;margin:0 0 10px; background:gold;border:double 4px #000;width:100px;text-align:center;" id="';
var markupEnd = '"></div>';
var markup2 ='';
var i;
for (i = 0; i < divIds.length; i++) {
	markup += markupStart + divIds[i] + markupEnd;        
}
document.getElementById('demo').innerHTML = markup;

function makeid() {
	var text = '';
	var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (var i = 0; i < 6; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text;
}


for (i = 0; i < divIds.length; i++) {
	document.getElementById(divIds[i]).innerHTML = makeid();
}