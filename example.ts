import { ChainProvider } from './src/ChainProvider'

const provider = new ChainProvider('mumbai', 'VJ6RXIGFUQ63SYQS7DN6IMM8QUA6GGY3JA')

provider
  .getTransactionReceipt('0xd0ac15a46d63a7b28c58251d288061a4499466fe2cf6daa013383a96cdc84801')
  .then((x) => console.log(JSON.stringify(x, null, 2)))
