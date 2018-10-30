# bookreservation

## API

### GET /price/:propId?fromDate=[date]&toDate=[date]
req
```
localhost:3001/price/1
```
returns 
- base price + info of a property
- available start dates

req: 
```
localhost:3001/price/1?fromDate=2018-11-05
```
returns 
- base price + info of a property
- available end dates

req: 
```
localhost:3001/price/1?fromDate=2018-11-05&toDate=2018-11-10
```

returns 
- base price + info of a property
- total calculated price

Example response: 
```
{
    "basePrice": 31500,
    "cityTax": 2000,
    "cleaningFee": 2500,
    "serviceFee": "0",
    "longStayDiscount": "0",
    "minStay": 1,
    "calendar": [
        {
            "date": "2018-11-05",
            "dayPriceModifier": 0
        },
        {
            "date": "2018-11-06",
            "dayPriceModifier": 0
        },
        {
            "date": "2018-11-07",
            "dayPriceModifier": 0
        },
        {
            "date": "2018-11-08",
            "dayPriceModifier": 0
        },
        {
            "date": "2018-11-10",
            "dayPriceModifier": 0
        }
    ]
}
```
