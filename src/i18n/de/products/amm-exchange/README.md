# MistSwap

<https://app.mistswap.fi/swap>

---

## What is MistSwap?

MistSwap is a decentralized exchange (or DEX, for short), and the first product by MistSwap. MistSwap is also non-custodial, which means that—unlike centralized exchanges—MistSwap does not need to possess your tokens in order for you to be able to trade them. Instead, MistSwap allows users to trade trustlessly, peer-to-peer, with liquidity that is supplied by other users. This means that new projects can easily connect to their desired markets as long as some entity is willing to provide the liquidity. 

To be a liquidity provider, holders of any token need to supply equal parts liquidity for that token (sometimes called the quote token), and a second token (usually BCH, or a stable coin). In return, these holders receive MistSwap liquidity provider (MLP) tokens that represent their share of the pooled liquidity for that token pair. The existence of this pooled liquidity gives other traders access to the underlying tokens in exchange for a small fee, which is distributed proportionately to all of the liquidity providers. 

In this sense, MistSwap is also an “automated market maker” (or AMM, for short). While a user’s underlying tokens remain in the pool, fluctuations in the price of the two underlying tokens automatically recalibrate the quantity of those tokens to conform to the equation x*y=k, where x and y are the quantities of the two paired tokens, and k is constant. This means that even though you supply equal parts of two tokens to the pool, the quantities you receive when you reclaim your liquidity will change relative to the difference in the change in price of the two tokens when you remove the liquidity. If the price of x token goes up, and y token goes down, you will have less of x and more of y, and vice versa. If the price of both tokens goes up, or the price of both goes down, you will nonetheless have relative quantities of each token proportionately to the difference in the change of the price of x and y.

![xyk graph](https://lh3.googleusercontent.com/DsPDUWp1DvSPvSSyFYLY7YFzVnS0K7oR4Mjfb30vxMKywZ-ym6JiK1Or_N_B-S76MA3-o66fwW_eSTbrSnfm5Ja1czG7ysXQWyb4TSjx7tGjY2O_ZPuygGDkFR2iDgQhWBHiFo3L)

<https://ethresear.ch/t/improving-front-running-resistance-of-x-y-k-market-makers/1281>
