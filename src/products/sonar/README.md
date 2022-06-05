# Sonar

<https://sonar.cash>

---

## What is Sonar?

Sonar is a fork of Blockscout - we have optimized it for smartBCH, adding LNS support as a defining feature. We tip our hats to the Blockscout team for providing such a great explorer to the greater crypto-ecosystem.

## Contract Verification

Sonar makes it easy to publish the source code of smart contracts and make it publicly available and verifiable. Verification is possible for both Solidity and Vyper based contracts. The constructor parameters for the smart contract can also be stored. Developers of projects on SmartBCH have an additional incentive to fully publish their source code - so that transaction decoding by Sonar can show other users what actions people are using on their dApp.

## LNS Integration

Users are able to view and search for LNS names throughout the interface. It is possible to easily see which validators are mining new blocks, and which named users or contracts are interacting. We pioneered the ENS integration as blockscout did not support it.

## Token Support

Both ERC-20 and ERC-721 (NFT)  tokens have full support, with the ability to track ownership and transfers.

## API Interaction

Developers have access to a rich GraphQL interface which exposes much of the underlying data that is available in the explorer. To learn how to integrate Sonar as a data source for your application, please read the [GraphQL API documentation](https://docs.blockscout.com/for-users/api/graphql). Additionally, we provide a generic REST API for common tasks, such as getting list of tokens holders, or getting the ABI of a verified contract, amongst many other utility methods. You can find more information on our [API documentation page](https://sonar.cash/api-docs).
