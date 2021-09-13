<div align="center">
<h1>chain-provider</h1>
<br />

[![Version][v-badge-url]][npm-url] [![Downloads][dl-badge-url]][npm-url] [![GitHub Workflow Status][gh-actions-img]][github-actions] [![Codecov][cov-badge-url]][cov-url]

</div>

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

[v-badge-url]: https://img.shields.io/npm/v/chain-provider.svg?style=for-the-badge&color=53a3d3&label=&logo=npm
[npm-url]: https://www.npmjs.com/package/chain-provider
[cov-badge-url]: https://img.shields.io/coveralls/github/talentlessguy/chain-provider?style=for-the-badge&color=53a3d3&
[cov-url]: https://coveralls.io/github/talentlessguy/chain-provider
[dl-badge-url]: https://img.shields.io/npm/dt/chain-provider?style=for-the-badge&color=53a3d3
[github-actions]: https://github.com/talentlessguy/chain-provider/actions
[gh-actions-img]: https://img.shields.io/github/workflow/status/talentlessguy/chain-provider/CI?style=for-the-badge&color=53a3d3&label=&logo=github
