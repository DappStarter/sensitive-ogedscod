require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pupil guess clinic broom shrug'; 
let testAccounts = [
"0xfc8950aefb9d0db5309f527fa1ce22b680234874eb9f665b3a42dacadc77330f",
"0x1d5046bf091dad9cc7e77ed4ecf2b6343e7f6609a6f03893a1c055c250aa1740",
"0xe875b0d7c2d19ab7887117b37af622c36760e2db4866fb8bd6b49c8be668aff8",
"0x44bd33d0e2221ac0d0b2dc9562d266c20eb1830dc1f5daad8f8e066578815ca0",
"0xcc5c4c22811bf687ca9ddfefa2fae49f4213255acbb4170ab0d00755db1ab09f",
"0x85565aecbc9bd813a7a3fcbbb4ef0b4d56c50734dd45ef2aa632c140c67cbe51",
"0x620685f144b4b9db8bd0ce2c9aec007fe6941546acbdd303eda12cacdb02fd36",
"0xf68c46b9cc985b2d11bdb4cc4bcf952cb77ed6831b8b88b6f5f206fcf51df2bd",
"0xffed57f338c06ce4b40990fff2df4f422a699b772a1b72739802d34fbc3e606b",
"0xd75050fa464cba21803979a3adb14aa9aefbf908ae4275284500dfd0210c79d6"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
