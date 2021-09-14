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
    name: 'optimism-testnet',
    chainId: 69
  },
  {
    name: 'bsc-mainnet',
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
    name: 'polygon-testnet',
    chainId: 80001
  },
  {
    name: 'arbitrum-mainnet',
    chainId: 42161
  },
  {
    name: 'arbitrum-testnet',
    chainId: 421611
  },
  {
    name: 'homestead',
    chainId: 1
  },
  {
    name: 'ropsten',
    chainId: 3
  },
  {
    name: 'rinkeby',
    chainId: 4
  },
  {
    name: 'goerli',
    chainId: 5
  },
  {
    name: 'kovan',
    chainId: 42
  }
]

const aliasToNetwork = (alias: string) => {
  switch (alias) {
    case 'ethereum':
    case 'mainnet':
      return 'homestead'

    case 'polygon':
      return 'polygon-mainnet'

    case 'arbitrum':
      return 'arbitrum-mainnet'

    case 'optimism':
      return 'optimism-mainnet'

    case 'bsc':
    case 'binance':
      return 'bsc-mainnet'

    case 'optimism-kovan':
      return 'optimism-testnet'

    case 'mumbai':
      return 'polygon-testnet'

    case 'arbitrum-rinkeby':
      return 'arbitrum-testnet'

    case 'chapel':
      return 'bsc-testnet'
    default:
      return alias
  }
}

export function getNetwork(network?: Networkish): null | Network {
  if (network == null) return null

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
    let networkName = aliasToNetwork(network)

    const matches = networks.filter((n) => n.name === networkName)

    if (matches.length) {
      return { name: networkName, chainId: matches[0].chainId }
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
