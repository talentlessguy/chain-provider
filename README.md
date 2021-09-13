# chain-provider

Multichain ethers.js provider based on `EtherscanProvider`.

## Supported networks

- Ethereum (+ testnets)
- BSC (+ testnet)
- Polygon (+ mumbai testnet)
- Optimism (+ kovan testnet)
- Arbitrum (+ rinkeby testnet)

## Install

```sh
pnpm i chain-provider
```

## Example

```ts
import { ChainProvider } from 'chain-provider'

const provider = new ChainProvider('polygon')
```
