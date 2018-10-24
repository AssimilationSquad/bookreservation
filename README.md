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
