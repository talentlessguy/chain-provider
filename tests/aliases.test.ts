import { ChainProvider } from '../src/ChainProvider'
import { suite } from 'uvu'
import * as assert from 'uvu/assert'

const t = suite('network aliases')

t('polygon', () => {
  const p1 = new ChainProvider('polygon')
  const p2 = new ChainProvider('polygon-mainnet')
  assert.equal(p1.network, p2.network)
})

t('polygon testnet', () => {
  const p1 = new ChainProvider('polygon-testnet')
  const p2 = new ChainProvider('mumbai')
  assert.equal(p1.network, p2.network)
})

t.run()
