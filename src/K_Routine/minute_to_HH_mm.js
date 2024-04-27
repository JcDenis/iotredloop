var d = Number(msg.payload);
var h = Math.floor(d / 60);
var m = Math.floor(d % 60);
if (h < 10) { h = h < 5 ? '00' : '0' + h; }
if (m < 10) { m = m < 5 ? '00' : '0' + m; }
msg.payload = h + ':' + m;
return msg;