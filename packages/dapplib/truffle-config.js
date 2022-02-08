require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind method imitate private flee spirit'; 
let testAccounts = [
"0x3b20ef06ab264704c3258c23fd5e8516c7c10d90e872489e625bf176ea874ccd",
"0x2612165dfdafdfef55f0050cde4a3fde13fd28edbe6723770f797dd6a475b50a",
"0x6591647d6c2b208f6534a347cc0c0ba7479fd4aac5cc556022cefd0f7c76e235",
"0x9325c0aa7ce3c40e90dc531cff6996ca50bded2feca66d8d1f05b7b954158464",
"0x8930daa2e35f25d74a4710bd5e6224771ee3a067dcb37d1977d05063f99cb264",
"0x002dbe6c96c19ee1f28b78f8496f284cb8470920065371c6536e4178b3e8cf41",
"0x5314e0f6d318ca8a29b952953bd4a4f10e98455cec180b5149fdd2a06c92e6bf",
"0x50691da907ac2a37a70be17baaeb9e859dc8d330b0cf6ee315f9c405148b113e",
"0x488e8c274306b7551974302efdc32b508d50b10c817925d65e0dcf161f050390",
"0xf6b557c74f6fedbfa38dfcb58421513943091fe02a0f91735e7fd46fd310eb6d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


