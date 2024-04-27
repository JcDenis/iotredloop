// output 1 : error message
// output 2 : device registration

// script var
var msg = msg;
var newmsg = {};

if (typeof msg === 'undefined'){
    return [null,null];
}

// check var existence
if (typeof msg.bucket === 'undefined' ||
    typeof msg.model === 'undefined' ||
    typeof msg.id === 'undefined'
) {
    node.status({
        fill: "red", shape: "ring", text: 'undefined device'});
    return [msg,null];
}

// recreate msg
newmsg = {
    'bucket': msg.bucket,
    'measurement': typeof msg.measurement === 'undefined' ? '' : msg.measurement,
    'field': typeof msg.field === 'undefined' ? '' : msg.field,
    'model': msg.model,
    'option': typeof msg.option === 'undefined' ? 0 : msg.option,
    'id': msg.id,
    'payload':''
};

node.status({ fill: 'green', shape: "ring", text:  newmsg.model + ' / ' + newmsg.id });
return [null,newmsg];