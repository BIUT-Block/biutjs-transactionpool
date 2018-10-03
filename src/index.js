const SECUtil = require('@sec-block/secjs-util')

class SECTransactionPool {
  /**
   * create a transaction pool with config, such as transaction pool of token chain or transaction chain
   * @param {Object} config
   *
   */
  constructor (config) {
    this.config = config
    this.txBuffer = []
    this.blockChainHashBuffer = {
      blockHashes: [],
      firstTimeUpdate: true,
      updateTime: ''
    }
    this.SECUtil = new SECUtil()
  }

  /**
   * save the transaction into local transaction pool
   * @param {Object} transaction
   */
  addTxIntoPool (transaction) {
    this.txBuffer.push(transaction)
  }

  /**
   * upate the block hash array
   * this blockChainHashBuffer is for checking the transaction in transaction pool, just compare the TxHash
   * @param {Object} blockChain
   */
  updateBlockHashArray (blockChain) {
    let timeStampOfLastBlock = blockChain.getLastBlockTimeStamp()

    if (this.blockChainHashBuffer.firstTimeUpdate) {
      blockChain.foreach((block) => {
        this.blockChainHashBuffer.blockHashes.add(block.TxHash)
        this.blockChainHashBuffer.firstTimeUpdate = false
        this.blockChainHashBuffer.updateTime = this.SECUtil.currentUnixTimeSecond()
      })
    } else {
      /* compare length */
      if (this.blockChainHashBuffer.updateTime < timeStampOfLastBlock) {
        let partBlockChain = blockChain.filter((block) => {
          return block.TimeStamp >= timeStampOfLastBlock
        })
        this.blockChainHashBuffer.blockHashes.concat(partBlockChain.TxHash)
        this.blockChainHashBuffer.updateTime = this.SECUtil.currentUnixTimeSecond()
      } else {
        // do nothing
      }
    }
  }

  /**
   * remove transactions in transaction pool, if they are already upload to blockchain
   */
  compareTxWithHashTable () {
    let tempBuffer = []
    this.txBuffer.foreach((transaction) => {
      this.blockChainHashBuffer.blockHashes.foreach((hash) => {
        if (transaction.TxHash !== hash) {
          tempBuffer.add(transaction.TxHash)
        }
      })
    })
    this.txBuffer = tempBuffer
  }

  /**
   * to update the local transaction pool with transactions from other peers
   * @param {Object} txFromOtherPeer
   */
  addTxFromOtherPeerIntoPool (txFromOtherPeer) {
    txFromOtherPeer.foreach((tx) => {
      this.txBuffer.foreach((localTx) => {
        if (tx.TxHash !== localTx.TxHash) {
          this.txBuffer.add(tx)
        }
      })
    })
  }

  /**
   * get transaction status: pending, success, error
   * @param  {Object} transaction
   * @return {Status}
   */
  getTxStatus (transaction) {
    return this.transaction.TxReceiptStatus
  }

  /**
   * added by PPG
   * using for getting transaction status for user
   * @param {string} TxHash
   */
  getTxStatusByTxHash (TxHash) {
    let buffer = {}
    this.txBuffer.forEach((tx) => {
      if (tx.TxHash === TxHash) {
        buffer = tx
      }
    })
    return buffer
  }
  /**
   * added by PPG
   * using for getting transaction status for user
   * @param  {object} transaction
   */
  getTxStatusByTx (transaction) {
    let buffer = {}
    this.txBuffer.forEach((tx) => {
      if (tx.TxHash === transaction.TxHash) {
        buffer = tx
      }
    })
    return buffer
  }

  /**
   * return all transaction from pool
   * @return {Array}
   */
  getAllTxFromPool () {
    return this.txBuffer
  }

  /**
   * clear the transaction pool
   */
  clear () {
    this.txBuffer = []
  }
}

module.exports = SECTransactionPool
