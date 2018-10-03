const _txPool = require('../src/index')
/**
 * test getTxStatusByHash by ppg
 */
const txPoolConfig = {
  poolname: 'transactionpool'
}
let tx1 = {
  TxHash: '174c54444ef752f6626b006678ba25a051e7b7a0f4943112576a636033b2ece3',
  TxReceiptStatus: 'success',
  Version: '0.0.1',
  BlockHeight: 1,
  TimeStamp: 1537976414348,
  TxFrom: '59633758164bbcfb5ab74dd86535ab2f36dc722aee60935c97dddadb18b6725b',
  TxTo: '922973feef0384ffa09ab3459edc6fd5d497027fbd07bf8e18488c8ea41cf4ef',
  Value: 1.9041047676656375,
  GasLimit: 6416,
  GasUsedByTxn: 729,
  GasPrice: 0.001,
  TxFee: 0.729,
  Nonce: 8267,
  InputData: 'Test Token Transaction from ppg'
}

let tx2 = {
  TxHash: '174c54444ef752f6626b006678ba25a051e7b7a0f4943112576a636033b2ec92',
  TxReceiptStatus: 'success',
  Version: '0.0.1',
  BlockHeight: 1,
  TimeStamp: 1537976414348,
  TxFrom: 'aa633758164bbcfb5ab74dd86535ab2f36dc722aee60935c97dddadb18b6725b',
  TxTo: 'bb2973feef0384ffa09ab3459edc6fd5d497027fbd07bf8e18488c8ea41cf4ef',
  Value: 1.9041047676656375,
  GasLimit: 6416,
  GasUsedByTxn: 729,
  GasPrice: 0.001,
  TxFee: 0.729,
  Nonce: 8267,
  InputData: 'Test Token Transaction from ppg'
}

const transactionPool = new _txPool(txPoolConfig)

transactionPool.addTxIntoPool(tx1)
transactionPool.addTxIntoPool(tx2)
/**
 * testing for getTxStatusByTxHash()
 */
let TxHash = '174c54444ef752f6626b006678ba25a051e7b7a0f4943112576a636033b2ece3'
let testByTxHash = transactionPool.getTxStatusByTxHash(TxHash)
console.log(testByTxHash)

let txTest = {
  TxHash: '174c54444ef752f6626b006678ba25a051e7b7a0f4943112576a636033b2ec92',
  TxReceiptStatus: 'success',
  Version: '0.0.1',
  BlockHeight: 1,
  TimeStamp: 1537976414348,
  TxFrom: 'aa633758164bbcfb5ab74dd86535ab2f36dc722aee60935c97dddadb18b6725b',
  TxTo: 'bb2973feef0384ffa09ab3459edc6fd5d497027fbd07bf8e18488c8ea41cf4ef',
  Value: 1.9041047676656375,
  GasLimit: 6416,
  GasUsedByTxn: 729,
  GasPrice: 0.001,
  TxFee: 0.729,
  Nonce: 8267,
  InputData: 'Test Token Transaction from ppg'
}
let testByTx = transactionPool.getTxStatusByTx(txTest)
console.log(testByTx)
