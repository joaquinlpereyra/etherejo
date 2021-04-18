// You can run this with `truffle exec solution.js`
// Truffle must be connected to ETH Ropsten
module.exports = async function(callback) {
    console.log("Started solution");
    let instance = await CallMeChallenge.at("0x9a2d85BEbdB921313F20916108Bc8D490940625a");
    console.log("Found call me contract");
    instance.callme();
    console.log("CALLED!");
    callback();
}
