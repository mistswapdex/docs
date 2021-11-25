# Entities
___

### Maker

| Field | Type | Description |
| :--- | :--- | :--- |
| id | ID | mark address |
| sushiServed | BigDecimal| all-time sushi served |
| servers | \[Server\] | array of servers |
| servings | \[Serving\] | array of servings |

### Server

| Field | Type | Description |
| :--- | :--- | :--- |
| id | ID | mark address |
| maker | Maker| maker |
| sushiServed | BigDecimal| all-time sushi served |
| servings | \[Serving\] | array of servings |
