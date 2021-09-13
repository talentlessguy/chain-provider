import { EtherscanProvider } from '@ethersproject/providers'
import type { Networkish, Network } from '@ethersproject/providers'
import { getNetwork } from './networks'
import { Logger } from '@ethersproject/logger'
import { version } from './_version'
import { getDefaultApiKey } from './getDefaultApiKey'

const logger = new Logger(version)

export class ChainProvider extends EtherscanProvider {
  constructor(network?: Networkish, apiKey?: string) {
    const standardNetwork = getNetwork(network == null ? 'optimism-mainnet' : network)

    switch ((standardNetwork || {}).name) {
      case 'optimism-mainnet':
      case 'optimism-testnet':
      case 'bsc-mainnet':
      case 'bsc-testnet':
      case 'polygon-mainnet':
      case 'polygon-testnet':
      case 'arbitrum-mainnet':
      case 'arbitrum-testnet':

      // aliases
      case 'optimism':
      case 'optimism-kovan':
      case 'bsc':
      case 'polygon':
      case 'arbitrum':
        break
      default:
        logger.throwError('unsupported network', Logger.errors.UNSUPPORTED_OPERATION, {
          network
        })
    }

    super(<Network>standardNetwork, apiKey || getDefaultApiKey(standardNetwork.name))
  }
  isCommunityResource(): boolean {
    return this.apiKey === getDefaultApiKey(this.network.name)
  }
  getBaseUrl(): string {
    switch (this.network ? this.network.name : 'invalid') {
      case 'optimism-mainnet':
      case 'optimism':
        return 'https://api.explorer.optimism.io'
      case 'optimism-testnet':
      case 'optimism-kovan':
        return 'https://api.kovan.optimism.io'
      case 'bsc-mainnet':
      case 'bsc':
        return 'http://api.bscscan.com'
      case 'bsc-testnet':
        return 'http://api-testnet.bscscan.com'
      case 'polygon-mainnet':
      case 'polygon':
        return 'https://api.polygonscan.com'
      case 'polygon-testnet':
      case 'mumbai':
        'https://api.mumbai.polygonscan.com'
      case 'arbitrum-mainnet':
      case 'arbitrum':
        return 'https://api.arbiscan.io'
      case 'arbitrum-testnet':
      case 'arbitrum-rinkeby':
        return 'https://api.rinkeby-explorer.arbitrum.io'
      case 'homestead':
        return 'https://api.etherscan.io'
        break
      case 'ropsten':
        return 'https://api-ropsten.etherscan.io'
        break
      case 'rinkeby':
        return 'https://api-rinkeby.etherscan.io'
        break
      case 'kovan':
        return 'https://api-kovan.etherscan.io'
        break
      case 'goerli':
        return 'https://api-goerli.etherscan.io'
        break
    }

    return logger.throwArgumentError('unsupported network', 'network', this.network)
  }
}
