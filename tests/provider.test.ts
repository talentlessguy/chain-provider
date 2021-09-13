import assert from 'assert'
import { BigNumber } from '@ethersproject/bignumber'
import { ChainProvider } from '../src/ChainProvider'
import { suite } from 'uvu'
import { Polygon, Mumbai } from './fixtures'
import { equals } from './helpers'

let t = suite('Polygon')

const provider = new ChainProvider('polygon-mainnet')

Polygon.Blocks.forEach((test) => {
  t(`fetches block #${test.number}`, async () => {
    const block = await provider.getBlock(test.number)
    equals(block, test)
  })
})

Polygon.Transactions.forEach((test) => {
  t(`fetches transaction: ${test.hash.substring(0, 10)}`, async () => {
    const tx = await provider.getTransaction(test.hash)
    assert.ok(typeof tx.confirmations === 'number', 'missing confirmations')

    const txWithoutConfirmations = { ...tx, confirmations: undefined }

    equals(txWithoutConfirmations, { ...test, confirmations: undefined })
  })
})

Polygon.TransactionReceipts.forEach((test) => {
  t(`fetches transaction Receipt: ${test.transactionHash.substring(0, 10)}`, async () => {
    const receipt = await provider.getTransactionReceipt(test.transactionHash)
    assert.ok(typeof receipt.confirmations === 'number', 'missing confirmations')
    equals(
      { ...receipt, logs: receipt.logs.map((log) => ({ ...log, topics: undefined })), confirmations: undefined },
      { ...test, confirmations: undefined }
    )
  })
})

t.run()

t = suite('Mumbai')

Mumbai.Blocks.forEach((test) => {
  t(`fetches block #${test.number}`, async () => {
    const block = await provider.getBlock(test.number)
    equals(block, test)
  })
})

Mumbai.Transactions.forEach((test) => {
  t(`fetches transaction: ${test.hash.substring(0, 10)}`, async () => {
    const tx = await provider.getTransaction(test.hash)
    assert.ok(typeof tx.confirmations === 'number', 'missing confirmations')

    const txWithoutConfirmations = { ...tx, confirmations: undefined }

    equals(txWithoutConfirmations, { ...test, confirmations: undefined })
  })
})

Mumbai.TransactionReceipts.forEach((test) => {
  t(`fetches transaction Receipt: ${test.transactionHash.substring(0, 10)}`, async () => {
    const receipt = await provider.getTransactionReceipt(test.transactionHash)
    assert.ok(typeof receipt.confirmations === 'number', 'missing confirmations')
    equals(
      { ...receipt, logs: receipt.logs.map((log) => ({ ...log, topics: undefined })), confirmations: undefined },
      { ...test, confirmations: undefined }
    )
  })
})
