// import { OaiPmh } from 'oai-pmh';

module.exports = function(RED) {
    function LowerCaseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
};

// async function main () {
//   const oaiPmh = new OaiPmh('http://export.arxiv.org/oai2')
//   const identifierIterator = oaiPmh.listIdentifiers({
//     metadataPrefix: 'oai_dc',
//     from: '2015-01-01',
//     until: '2015-01-04'
//   })
//   for await (const identifier of identifierIterator) {
//     console.log(identifier)
//   }
// }
//
// main().catch(console.error)
