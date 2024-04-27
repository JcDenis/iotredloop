## ABOUT
iotredloop v0.0.1
> Simple nodered home automation manager

This is a personnal project of home automation, it is highly limited to my needs.
There are more explanation, in french, on [my blog](https://chez.jcdenis.fr/category/Domotique/NRDomV2)

Main flows.json was cut into multiple files by tabs using node-red-contrib-flow-manager.

## REQUIREMENTS

Flows are written under Node-red v3.1.9 with following packages :

* node-red-contrib-flow-manager 0.7.4
* node-red-contrib-msg-speed 2.1.0
* node-red-contrib-queue-gate 1.5.5
* node-red-contrib-simple-gate 0.5.2
* node-red-contrib-stackhero-influxdb-v2 1.0.4
* @flowfuse/node-red-dashboard 1.8.1 (nodered dashboard 2)

Flows also required a working MQTT broker and a InfluxDB database.
It additionnaly uses some Unifi and Amazon Alexa stuff.

## LICENSE

GNU GENERAL PUBLIC LICENSE version 3 (GPL-3.0 license)

## CONTRIBUTORS

* Jean-Christian Denis (author)

You are welcome to contribute to this code.
