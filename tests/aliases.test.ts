import { ChainProvider } from '../src/ChainProvider'
import { suite } from 'uvu'
import * as assert from 'uvu/assert'

const t = suite('Network aliases')

t('polygon', () => {
  const p1 = new ChainProvider('polygon')
  const p2 = new ChainProvider('polygon-mainnet')
  assert.equal(p1, p2)
})

t('polygon testnet', () => {
  const p1 = new ChainProvider('polygon-testnet')
  const p2 = new ChainProvider('mumbai')
  assert.equal(p1, p2)
})

t('binance', () => {
  const p1 = new ChainProvider('binance')
  const p2 = new ChainProvider('bsc')

  assert.equal(p1, p2)
})

t('binance testnet', () => {
  const p1 = new ChainProvider('bsc-testnet')
  const p2 = new ChainProvider('chapel')

  assert.equal(p1, p2)
})

t('optimism', () => {
  const p1 = new ChainProvider('optimism')
  const p2 = new ChainProvider('optimism-mainnet')

  assert.equal(p1, p2)
})

t.run()
