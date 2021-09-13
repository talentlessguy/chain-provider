import type { Networkish, Network } from '@ethersproject/providers'

import { Logger } from '@ethersproject/logger'
import { version } from './_version'

const logger = new Logger(version)

export const networks = [
  {
    name: 'optimism-mainnet',
    chainId: 10
  },
  {
    name: 'optimism',
    chainId: 10
  },
  {
    name: 'optimism-testnet',
    chainId: 69
  },
  {
    name: 'optimism-kovan',
    chainId: 69
  },
  {
    name: 'bsc-mainnet',
    chainId: 56
  },
  {
    name: 'bsc',
    chainId: 56
  },
  {
    name: 'bsc-testnet',
    chainId: 97
  },
  {
    name: 'polygon-mainnet',
    chainId: 137
  },
  {
    name: 'polygon',
    chainId: 137
  },
  {
    name: 'polygon-testnet',
    chainId: 80001
  },
  {
    name: 'arbitrum-mainnet',
    chainId: 42161
  },
  {
    name: 'arbitrum',
    chainId: 42161
  },
  {
    name: 'arbitrum-testnet',
    chainId: 421611
  }
]

export function getNetwork(network?: Networkish): null | Network {
  if (network == null) {
    return null
  }

  // Chain ID
  if (typeof network === 'number') {
    const matches = networks.filter((n) => n.chainId === network)
    if (matches.length) {
      return { name: matches[0].name, chainId: matches[0].chainId }
    }

    return {
      name: 'unknown',
      chainId: network
    }
  }

  // Chain name
  if (typeof network === 'string') {
    const matches = networks.filter((n) => n.name === network)
    if (matches.length) {
      return { name: matches[0].name, chainId: matches[0].chainId }
    }
    return null
  }

  if (typeof network.name === 'string' && typeof network.chainId === 'number') {
    const byName = getNetwork(network.name)
    const byChainId = getNetwork(network.chainId)

    // Nothing standard; valid custom network
    if (byName == null && byChainId == null) {
      return {
        name: network.name,
        chainId: network.chainId
      }
    }

    // Make sure if it is a standard chain the parameters match
    if (byName && byChainId && byName.name === byChainId.name && byName.chainId === byChainId.chainId) {
      return byName
    }
  }

  return logger.throwArgumentError('network chainId mismatch', 'network', network)
}