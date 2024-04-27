// Check and recreate clean message of device description
// output 1 : error message
// output 2 : device registration

// script var
var msg = msg;
var newmsg = {};

// no message
if (typeof msg === 'undefined'){
    return [null,null];
}

// check possible var existence
if (typeof msg.bucket === 'undefined' ||
    typeof msg.measurement === 'undefined' ||
    typeof msg.field === 'undefined' ||
    typeof msg.format === 'undefined' ||
    typeof msg.default === 'undefined'
) {
    node.status({
        fill: "red", shape: "ring", text: 'undefined device'});
    return [msg,null];
}

// recreate msg
newmsg = {
    'bucket': msg.bucket,
    'measurement': msg.measurement,
    'field': msg.field,
    'format': msg.format,
    'path': msg.bucket + '/' + msg.measurement + '/' + msg.field,
    'payload': msg.default,

    'protocol': typeof msg.protocol === 'undefined' ? '' : msg.protocol,
    'model': typeof msg.model === 'undefined' ? '' : msg.model,
    'id': typeof msg.id === 'undefined' ? '' : msg.id,
    'option': typeof msg.option === 'undefined' ? 0 : msg.option
};

node.status({ fill: 'green', shape: "ring", text:  newmsg.path + ' = ' + newmsg.payload });
return [null,newmsg];