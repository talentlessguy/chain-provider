import type { Provider, Networkish } from '@ethersproject/providers'
import { FallbackProvider } from '@ethersproject/providers'
import { ChainProvider } from './ChainProvider'

export function getDefaultProvider(network?: Networkish, config?: Record<string, string>): Provider {
  const providers: Array<Provider> = []

  providers.push(new ChainProvider(network, (config || {}).bscscan || undefined))

  return new FallbackProvider(providers)
}
