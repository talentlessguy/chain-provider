import { Logger } from '@ethersproject/logger'
import { version } from './_version'

const logger = new Logger(version)
export const getDefaultApiKey = (network: string) => {
  switch (network) {
    case 'optimism-testnet':
    case 'optimism-mainnet':
    case 'optimism':
    case 'arbitrum':
    case 'arbitrum-mainnet':
    case 'arbitrum-testnet':
    case 'optimism-kovan':
      return '9D13ZE7XSBTJ94N9BNJ2MA33VMAY2YPIRB'
    case 'bsc-mainnet':
    case 'bsc-testnet':
    case 'bsc':
      return 'EVTS3CU31AATZV72YQ55TPGXGMVIFUQ9M9'
    case 'polygon-mainnet':
    case 'polygon-testnet':
    case 'polygon':
      return 'VJ6RXIGFUQ63SYQS7DN6IMM8QUA6GGY3JA'

    default:
      logger.throwError('unsupported network', Logger.errors.UNSUPPORTED_OPERATION, {
        network
      })
  }
}
