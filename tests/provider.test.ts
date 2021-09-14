import { ChainProvider } from '../src/ChainProvider'
import { suite } from 'uvu'
import * as assert from 'uvu/assert'

const t = suite('ChainProvider')
t('it throws a logger error for unsupported networks', () => {
  try {
    new ChainProvider('non-existent-chain')
  } catch (e) {
    assert.equal(e.code, 'UNSUPPORTED_OPERATION')
    assert.equal(e.reason, 'unsupported network')
  }
})

t('community API key is used by default', () => {
  const p = new ChainProvider('polygon')

  assert.equal(p.isCommunityResource(), true)
})

t.run()
