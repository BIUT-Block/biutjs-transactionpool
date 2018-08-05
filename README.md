<a name="SECTransactionPool"></a>

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard) 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)]

## SECTransactionPool

This package is for sec blockchain transaction pool

<a name="SECTransactionPool"></a>

* [SECTransactionPool](#SECTransactionPool)
    * [new SECTransactionPool(config)](#new_SECTransactionPool_new)
    * [.addTxIntoPool(transaction)](#SECTransactionPool+addTxIntoPool)
    * [.updateBlockHashArray(blockChain)](#SECTransactionPool+updateBlockHashArray)
    * [.compareTxWithHashTable()](#SECTransactionPool+compareTxWithHashTable)
    * [.addTxFromOtherPeerIntoPool(txFromOtherPeer)](#SECTransactionPool+addTxFromOtherPeerIntoPool)
    * [.getTxStatus(transaction)](#SECTransactionPool+getTxStatus) => <code>Status</code>
    * [.getAllTxFromPool()](#SECTransactionPool+getAllTxFromPool) => <code>Array</code>
    * [.clear()](#SECTransactionPool+clear)

<a name="new_SECTransactionPool_new"></a>

### new SECTransactionPool(config)
create a transaction pool with config, such as transaction pool of token chain or transaction chain


| Param | Type |
| --- | --- |
| config | <code>Object</code> | 

<a name="SECTransactionPool+addTxIntoPool"></a>

### secTransactionPool.addTxIntoPool(transaction)
save the transaction into local transaction pool

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  

| Param | Type |
| --- | --- |
| transaction | <code>Object</code> | 

<a name="SECTransactionPool+updateBlockHashArray"></a>

### secTransactionPool.updateBlockHashArray(blockChain)
upate the block hash array
this blockChainHashBuffer is for checking the transaction in transaction pool, just compare the TxHash

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  

| Param | Type |
| --- | --- |
| blockChain | <code>Object</code> | 

<a name="SECTransactionPool+compareTxWithHashTable"></a>

### secTransactionPool.compareTxWithHashTable()
remove transactions in transaction pool, if they are already upload to blockchain

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  
<a name="SECTransactionPool+addTxFromOtherPeerIntoPool"></a>

### secTransactionPool.addTxFromOtherPeerIntoPool(txFromOtherPeer)
to update the local transaction pool with transactions from other peers

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  

| Param | Type |
| --- | --- |
| txFromOtherPeer | <code>Object</code> | 

<a name="SECTransactionPool+getTxStatus"></a>

### secTransactionPool.getTxStatus(transaction) => <code>Status</code>
get transaction status: pending, success, error

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  

| Param | Type |
| --- | --- |
| transaction | <code>Object</code> | 

<a name="SECTransactionPool+getAllTxFromPool"></a>

### secTransactionPool.getAllTxFromPool() => <code>Array</code>
return all transaction from pool

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  
<a name="SECTransactionPool+clear"></a>

### secTransactionPool.clear()
clear the transaction pool

**Kind**: instance method of [<code>SECTransactionPool</code>](#SECTransactionPool)  
