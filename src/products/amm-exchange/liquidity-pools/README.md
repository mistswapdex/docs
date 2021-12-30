# Liquidity Pools

<https://app.mistswap.fi/pool>

---

## What Are Liquidity Pools?

Liquidity pools are place to pool tokens (which we sometimes call liquidity) so that users can use them to make trades in a decentralized way. These pools are created by users and decentralized apps (or Dapps, for short) who want to profit from their usage. To pool liquidity, the amounts a user supplies must be equally divided between two coins: the primary token (sometimes called the quote token) and the base token (usually BCH or a stable coin). MistSwap's liquidity pools allow anyone to provide liquidity at the following link: <https://app.mistswap.fi/pool>. When they do so, they will receive MLP tokens (MistSwap Liquidity Provider tokens). If a user deposited $MIST and $BCH into a pool, they would receive MIST-BCH MLP tokens. These tokens represent a proportional share of the pooled assets, allowing a user to reclaim their funds at any point. Every time another user uses the pool to trade between $MIST and $BCH, a 0.3% fee is taken on the trade. 0.25% of that trade goes back to the LP pool. 

The value of the MLP tokens, which represent the shares of the total liquidity each pool, is updated with each trade to add their value relative to the tokens the pool uses to trade. If previously there were 100 MLP tokens representing 100 BCH and 100 MIST, each token would be worth 1 BCH & 1 MIST (note in this example, BCH and MIST are the same relative value). If a user were then to trade 10 BCH for 10 MIST in that pool, and another user were to trade 10 MIST for 10 BCH, then there would now be 100.025 BCH and 100.025 MIST. This means each LP token would be worth 1.0025 BCH and 1.00025 MIST now when it is withdrawn.

## Instructions for Adding Liquidity

### Using <https://app.mistswap.fi/pool>

Adding liquidity is really straightforward. First, you must choose which tokens to input. Click "Select Token".

If you have never used MistSwap before, this will trigger a popup asking you to choose a list of tokens. Click on "Choose a list".

There are different lists to choose from, but in this example we will be using the default list of MistSwap.

After choosing a list, you will be shown the tokens represented in that list along with your balance of them (if any). In this case, we only have two to choose from, flexUSD and BCH. 

After selecting our desired input tokens, we're ready to click "Supply"! If this is your first time interacting with MistSwap's smart contracts for either or both of the tokens in question, you will be prompted to "Approve" that our smart contracts are allowed to handle them for you.

When the liquidity add is done, you receive Mist Liquidity Provider (MLP) tokens in return. These represent your share in the liquidity pool, and your earned fees that are received upon withdrawal of the liquidity.

### Adding Liquidity to a New Pool

If the pool you wish to provide liquidity to does not exist, you can create it of course! Just provide the tokens, and off you go. As the first liquidity provider, you set the initial exchange ratio (price) if one of the tokens in the pair does not exist yet on MistSwap. This often quickly corrects itself through arbitrage and by more liquidity providers adding to the pool.
