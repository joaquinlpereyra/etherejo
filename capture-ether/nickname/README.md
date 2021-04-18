# Objective

Change the flag on the contract to True. This will involve a transaction (writes data), not a call (only reads data).

The address is at `0x9a2d85BEbdB921313F20916108Bc8D490940625a` in Ropsten.

# Solution

Once you actually set up Truffle, Infura, HDWalet (HD Wallet? Why the name???), it is actually quite easy.

```truffle(ropsten)> let instance = await CallMeChallenge.at("0x9a2d85BEbdB921313F20916108Bc8D490940625a");
undefined
truffle(ropsten)> instance.
instance.__defineGetter__      instance.__defineSetter__
instance.__lookupGetter__      instance.__lookupSetter__
instance.__proto__             instance.hasOwnProperty
instance.isPrototypeOf         instance.propertyIsEnumerable
instance.toLocaleString        instance.toString
instance.valueOf

instance.abi                   instance.address
instance.allEvents             instance.callme
instance.constructor           instance.contract
instance.getPastEvents         instance.isComplete
instance.methods               instance.send
instance.sendTransaction       instance.transactionHash

truffle(ropsten)> instance.abi
[
  {
    constant: true,
    inputs: [],
    name: 'isComplete',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb2fa1c9e'
  },
  {
    constant: false,
    inputs: [],
    name: 'callme',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa3c8e393'
  }
]
truffle(ropsten)> instance.
instance.__defineGetter__      instance.__defineSetter__
instance.__lookupGetter__      instance.__lookupSetter__
instance.__proto__             instance.hasOwnProperty
instance.isPrototypeOf         instance.propertyIsEnumerable
instance.toLocaleString        instance.toString
instance.valueOf

instance.abi                   instance.address
instance.allEvents             instance.callme
instance.constructor           instance.contract
instance.getPastEvents         instance.isComplete
instance.methods               instance.send
instance.sendTransaction       instance.transactionHash

truffle(ropsten)> instance.callme();
{
  tx: '0x73ef2e41d9dc9ea3dae35529a7b0653818359b7579aef330df6677083f257923',
  receipt: {
    blockHash: '0xe37adc274573949499df5af4be6b48f5b4e571a5d243bfe1c4618ff7f6c1e2e4',
    blockNumber: 10064809,
    contractAddress: null,
    cumulativeGasUsed: 156329,
    from: '0xb7c9d61f22eaf45ac711f79159f68afe9eb7e794',
    gasUsed: 43364,
    logs: [],
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    status: true,
    to: '0x9a2d85bebdb921313f20916108bc8d490940625a',
    transactionHash: '0x73ef2e41d9dc9ea3dae35529a7b0653818359b7579aef330df6677083f257923',
    transactionIndex: 1,
    type: '0x0',
    rawLogs: []
  },
  logs: []
}
```

# Why have a Truffle project?

To interact with a deployed contract, we need its ABI. 

There are a couple of good descriptions of Ethereum Contracts' ABI in these links:

* https://ethereum.stackexchange.com/questions/234/what-is-an-abi-and-why-is-it-needed-to-interact-with-contracts
* https://docs.soliditylang.org/en/v0.8.3/abi-spec.html

The point is that the ABI is quite cumbersome to compute on your own. 
The ABI boils down to the `Keccack(function_signature)[:4]` with some weird requirements on `function_signature`.  

Anyway, the easiest way to get this is to actually "compile" the contract with Truffle (or any other library that does this) and then interact with it via a web3 library.

# The ABI

Truffle gave me this nice ABI

```
truffle(ropsten)> instance.abi
[
  {
    constant: true,
    inputs: [],
    name: 'isComplete',
    outputs: [ [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xb2fa1c9e'
  },
  {
    constant: false,
    inputs: [],
    name: 'callme',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xa3c8e393'
  }
]
```

It is not really the ABI right? But it is nice to look at.

