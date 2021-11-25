# Entities
___


### Bar

| Field | Type | Description |
| :--- | :--- | :--- |
| id | ID | id |
| decimals | BigInt | decimals |
| name | String | name |
| sushi | Bytes | sushi address |
| symbol | String | symbol |
| totalSupply | BigDecimal | total supply |
| ratio | BigDecimal | ratio |
| xSushiMinted | BigDecimal | xsushi minted |
| xSushiBurned | BigDecimal | xsushi burned |
| sushiStaked | BigDecimal | sushi staked |
| sushiStakedUSD | BigDecimal | sushi staked usd |
| sushiHarvested | BigDecimal | sushi harvested |
| sushiHarvestedUSD | BigDecimal | sushi harvested usd |
| xSushiAge | BigDecimal | xsushi age |
| xSushiAgeDestroyed | BigDecimal | xsushi age destroyed |
| users | [Users] | array of users |
| updatedAt | BigInt | updated at timestamp |

### User

| Field | Type | Description |
| :--- | :--- | :--- |
| id | ID | user address |
| xSushi | BigDecimal | xsushi |
| xSushiIn | BigDecimal | xsushi in |
| xSushiOut | BigDecimal | xsushi out |
| xSushiMinted | BigDecimal | xsushi minted |
| xSushiBurned | BigDecimal | xsushi burned |
| xSushiOffset | BigDecimal | xsushi offset |
| xSushiAge | BigDecimal | xsushi age |
| xSushiAgeDestroyed | BigDecimal | xsushi age destroyed |
| sushiStaked | BigDecimal | sushi staked |
| sushiStakedUSD | BigDecimal | sushi staked usd |
| sushiHarvested | BigDecimal | sushi harvested |
| sushiHarvestedUSD | BigDecimal | sushi harvested usd |
| sushiOut | BigDecimal | sushi out |
| sushiIn | BigDecimal | sushi in |
| usdOut | BigDecimal | usd out |
| usdIn | BigDecimal | usd in |
| sushiOffset | BigDecimal | sushi offset |
| usdOffset | BigDecimal | usd offset |
| createdAt | BigInt | created at timestamp |
| createdAtBlock | BigInt | created at block |
| updatedAt | BigInt | updated at timestamp |
| updatedAtBlock | BigInt | updated at block |