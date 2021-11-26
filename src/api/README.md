# Overview

This page explains everything you need to know about the MistSwap Subgraph. The MistSwap Subgraph listens for events from one or more data sources \(Smart Contracts\) on the Ethereum Blockchain. It handles indexing and caching of data which can later be queried using an exposed GraphQL API, providing an excellent developer experience.

### The Graph

The MistSwap Subgraph is powered by [The Graph](https://thegraph.com).

> The Graph is a protocol for building decentralized applications \(dApps\) quickly on Ethereum and IPFS using GraphQL.

### Data Sources

MasterChef - 0xc2edad668740f1aa35e4d8f227fb8e17dca888cd

Factory - 0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac

### Resources

[MistSwap Subgraph Explorer](https://thegraph.mistswap.fi/subgraphs/name/mistswap/exchange/graphql?query=%7B%0A%20%20pairs%20(orderBy%3AreserveUSD%2C%20orderDirection%3Adesc)%20%7B%0A%20%20%20%20id%0A%20%20%20%20token0%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20token1%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20token0Price%0A%20%20%20%20token1Price%0A%20%20%20%20volumeUSD%0A%20%20%20%20untrackedVolumeUSD%0A%20%20%20%20reserve0%0A%20%20%20%20reserve1%0A%20%20%20%20reserveUSD%0A%20%20%20%20reserveETH%0A%20%20%20%20trackedReserveETH%0A%20%20%7D%0A%7D)

[MistSwap Subgraph Source](https://github.com/mistswapdex/mistswap-subgraph)

[The Graph](https://thegraph.com/docs)

[GraphQL](https://graphql.org)

### Caveats

::: warning
The MistSwap Subgraph is not intended to be used as a data source for structuring transactions \(contracts should be referenced directly for the most reliable live data\).
:::

