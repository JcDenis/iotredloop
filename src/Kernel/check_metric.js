// output 1 : error message
// output 2 : device registration

// script var
var msg = msg;
var newmsg = {};

// try if msg.topic is a path
if (typeof msg.topic === 'string' &&
    typeof msg.bucket === 'undefined' &&
    typeof msg.measurement === 'undefined' &&
    typeof msg.field === 'undefined'
) {
    const device = msg.topic.split('/');
    if (typeof device[1] === 'string' &&
        typeof device[2] === 'string' &&
        typeof device[3] === 'string'
    ) {
        msg.source = device[0];
        msg.bucket = device[1];
        msg.measurement = device[2];
        msg.field = device[3];

    }
}

// check var existence
if (typeof msg.bucket === 'undefined' ||
    typeof msg.measurement === 'undefined' ||
    typeof msg.field === 'undefined'
) {
    node.status({
        fill: "red", shape: "ring", text: 'undefined device'});
    return [msg,null];
}

// recreate msg
newmsg = {
    'topic': 'metric',
    'source': typeof msg.source === 'string' ? msg.source : 'unknow',
    'bucket': msg.bucket,
    'measurement': msg.measurement,
    'field': msg.field,
    'path': msg.bucket + '/' + msg.measurement + '/' + msg.field,
    'payload': msg.payload,
    'repeat': typeof msg.repeat === 'boolean' ? msg.repeat : false
};

node.status({ fill: 'green', shape: "ring", text:  newmsg.source + ' : ' + newmsg.path + ' = ' + newmsg.payload });
return [null,newmsg];