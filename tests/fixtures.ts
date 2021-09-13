import { BigNumber } from '@ethersproject/bignumber'

export const Polygon = {
  Blocks: [
    {
      hash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3',
      parentHash: '0x3799c2760df793981fcd9a5a28a775898f7d049c8c4ee2ba15e4e6013b63dd3a',
      number: 12041068,
      timestamp: 1615801404,
      nonce: '0x0000000000000000',
      difficulty: 19,
      gasLimit: BigNumber.from('0x01312d00'),
      gasUsed: BigNumber.from('0x0b1536'),
      miner: '0xF84C74dEa96DF0EC22e11e7C33996C73FCC2D822',
      extraData:
        '0xd78301091883626f7288676f312e31352e35856c696e757800000000000000000a8048c0b55b879b15eb76e1f02abf0ad4736cbde2de5d1864eb6a7574491fa425b8f000335bfd15fd19020fe9112955c614239d8130503f4e799d2b3d5ce2ee00',
      transactions: [
        '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
        '0xf0856142666bd70086d8dc6163c23aba57dfd49eb3ae9c0a49ba996998f740aa',
        '0xcfb9f8bd2c86e98f33c59b2a116cbc9b93817246320d9962d86102b16030246e'
      ]
    }
  ],
  Transactions: [
    {
      hash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
      type: 0,
      accessList: null,
      blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3',
      blockNumber: 12041068,
      transactionIndex: 0,
      confirmations: 7012811,
      from: '0x7585475146378538aB39cbBE07c6E494b8895287',
      gasPrice: BigNumber.from('0x3b9aca00'),
      gasLimit: BigNumber.from('0x059413'),
      to: '0x61EB0EE9afb9d0742281578c1de44E115Cb731Cd',
      value: BigNumber.from('0x00'),
      nonce: 20537,
      data: '0x7d56dc9d0000000000000000000000000000000000000000000000000000000001406f6700000000000000000000000000000000000000000000000000000000006ad2310000000000000000000000000000000000000000000000000001b1d4378ed000',
      r: '0xeb17aaee296d19af82adc59947a1deea58ea8a9b8c5c7e6460d244673aa9d2b9',
      s: '0x0a982b745c56744dc66827abd25146fcc98ea9d4de470734cc7ebf3388f37dac',
      v: 310,
      creates: null,
      chainId: 137
    }
  ],
  TransactionReceipts: [
    {
      to: '0x61EB0EE9afb9d0742281578c1de44E115Cb731Cd',
      from: '0x7585475146378538aB39cbBE07c6E494b8895287',
      contractAddress: null,
      transactionIndex: 0,
      gasUsed: BigNumber.from('0x057dd7'),
      logsBloom:
        '0x00000000000000000000000008000000002000000001000400000000000000000000000000000000000000800000000000008000001000000001000000200000080004001000000000000008000000800800000001000000000100400000000000080000000000200000100000000000000000800008000080100010000000000000000000001000000000000004000008001000000000000000000080000000220000000000000000000000000008000000000000000000000000001000004000000002000000000001000000000000000000008000000000100000000000000010010000000000000000000000000000000200000000000000000000100000',
      blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3',
      transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
      logs: [
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',

          data: '0x0000000000000000000000000000000000000000000000000000a0fb06201000',
          logIndex: 0,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        },
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',

          data: '0x000000000000000000000000000000000000000000084594b0c782b851d0c280',
          logIndex: 1,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        },
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',

          data: '0x000000000000000000000000000000000000000000000000000110d9316ec000',
          logIndex: 2,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        },
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f',

          data: '0x000000000000000000000000000000000000000000084594b0c671df20620280',
          logIndex: 3,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        },
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x61EB0EE9afb9d0742281578c1de44E115Cb731Cd',

          data: '0x000000000000000000000000000000000000000000000000000110d9316ec0000000000000000000000000000000000000000000000000000000a0fb06201000',
          logIndex: 4,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        },
        {
          transactionIndex: 0,
          blockNumber: 12041068,
          transactionHash: '0x7865c760a80e222fedc2d8307e16b373261f121e7722638d69dd5a914a00fe5b',
          address: '0x0000000000000000000000000000000000001010',

          data: '0x0000000000000000000000000000000000000000000000000001475295a1a6000000000000000000000000000000000000000000000000698199b3602a22eab0000000000000000000000000000000000000000000000075c6c74eafd3da6a6200000000000000000000000000000000000000000000006981986c0d948144b0000000000000000000000000000000000000000000000075c6c89602697c1062',
          logIndex: 5,
          blockHash: '0xb0b9a2a68bf5cf914e1be130e1735a40d79dc37cae084de86c3d6af721689ff3'
        }
      ],
      blockNumber: 12041068,
      confirmations: 7012727,
      cumulativeGasUsed: BigNumber.from('0x057dd7'),
      effectiveGasPrice: BigNumber.from('0x3b9aca00'),
      status: 1,
      type: 0,
      byzantium: true
    }
  ]
}
