# bookreservation

## API

### GET /price/:propId
no req.body
returns 
- base price + info of a property
- available start dates

req.body: 
```
{
  startDate: '10-24-18'
}
```
returns 
- base price + info of a property
- available end dates

req.body: 
```
{
  startDate: '10-24-18',
  endDate: '10-28-18'
}
```
returns 
- base price + info of a property
- total calculated price
```
{
  basePrice: 190,
  cityTax: 30,
  cleaningFee: 30,
  serviceFee: 0.07,
  longStayDiscount: 0,
  minStay: 1,
  calendar: [
    {date: "10-24-18", dayPriceModifier: 0, available: true},
    ...
  ]
}
```
