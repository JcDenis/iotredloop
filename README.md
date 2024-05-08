## ABOUT
iotredloop v0.0.1
> Simple nodered home automation kernel

This is a personnal project of home automation, it is highly limited to my needs.
There are more explanation, in french, on [my blog](https://chez.jcdenis.fr/category/Domotique/NRDomV2)

Main flows.json was cut into multiple files by tabs using [node-red-contrib-flow-manager](https://flows.nodered.org/node/node-red-contrib-flow-manager).

## REQUIREMENTS

Flows are written under Node-red v3.1.9 with following nodes packages :

* [node-red-contrib-flow-manager](https://flows.nodered.org/node/node-red-contrib-flow-manager) 0.7.4
* [node-red-contrib-msg-speed](https://flows.nodered.org/node/node-red-contrib-msg-speed) 2.1.0
* [node-red-contrib-queue-gate](https://flows.nodered.org/node/node-red-contrib-queue-gate) 1.5.5
* [node-red-contrib-simple-gate](https://flows.nodered.org/node/node-red-contrib-simple-gate) 0.5.2
* [node-red-contrib-stackhero-influxdb-v2](https://flows.nodered.org/node/node-red-contrib-stackhero-influxdb-v2) 1.0.4
* [@flowfuse/node-red-dashboard](https://flows.nodered.org/node/@flowfuse/node-red-dashboard) 1.8.1 (nodered dashboard 2)
* [node-red-contrib-cpu](https://flows.nodered.org/node/node-red-contrib-cpu) 0.0.4
* [node-red-contrib-moment](https://flows.nodered.org/node/node-red-contrib-moment) 5.0.0
* [node-red-contrib-bigtimer](https://flows.nodered.org/node/node-red-contrib-bigtimer) 2.8.6
* [node-red-contrib-cron-plus](https://flows.nodered.org/node/node-red-contrib-cron-plus) 2.1.0
* [node-red-contrib-influxdb](https://flows.nodered.org/node/node-red-contrib-influxdb) 0.7.0
* [node-red-contrib-credentials](https://flows.nodered.org/node/node-red-contrib-credentials) 0.2.3
* [node-red-node-base64](https://flows.nodered.org/node/node-red-node-base64) 0.3.0
* [node-red-contrib-md5](https://flows.nodered.org/nodenode-red-contrib-md5) 1.0.4

It additionnaly uses some Telegram, Proxmox, Unifi, Nextcloud (agenda) and Amazon Alexa stuff.

* [node-red-contrib-telegrambot](https://flows.nodered.org/node/node-red-contrib-telegrambot) 15.1.10
* [node-red-contrib-proxmox](https://flows.nodered.org/node/node-red-contrib-proxmox) 0.0.2
* [node-red-contrib-unifi](https://flows.nodered.org/node/node-red-contrib-unifi) 0.3.15
* [@kuehnelbs/node-red-contrib-nextcloud](https://flows.nodered.org/node/@kuehnelbs/node-red-contrib-nextcloud) 0.1.3
* [node-red-contrib-alexa-remote2-applestrudel](https://flows.nodered.org/node/node-red-contrib-alexa-remote2-applestrudel) 5.0.50
* [node-red-contrib-virtual-smart-home](https://flows.nodered.org/node/node-red-contrib-virtual-smart-home) 4.4.0

**Flows also required a working MQTT broker and a InfluxDB database.**

## INSTALLATION

The better way is to :
 1. install nodered in [nodered project](https://nodered.org/docs/user-guide/projects/) mode with git,
 2. add nodered node-red-contrib-flow-manager palette,
 3. pull this repository,
 4. select only flow tabs you want in flow manager. (top right button)

Tabs starting with:
* K. Kernel tabs, required
* P. Protocols tabs, depending of your devices
* U. Dashboard tabs,required
* R. Rooms tabs, not required, some exemples of rooms taken from my house

## LICENSE

GNU GENERAL PUBLIC LICENSE version 3 (GPL-3.0 license)

## CONTRIBUTORS

* Jean-Christian Denis (author)

You are welcome to contribute to this code.
