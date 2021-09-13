import { ChainProvider } from './src/ChainProvider'

const provider = new ChainProvider('polygon-mainnet', 'VJ6RXIGFUQ63SYQS7DN6IMM8QUA6GGY3JA')

provider.getTransactionReceipt('0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b').then(console.log)
