// script var
var msg = msg;
var newmsg = {};

// recreate msg
newmsg = {
    'topic':'gate',
    'payload': msg.payload
};

return newmsg;