
# It displays price tickers data (random) on the UI in realtime

## Changes

### Backend:
- functionality has been split into separate files
- prices changes are now calculated based on previous data
- data update interval is now set by the client

### Frontend
- added visual effects to highlight changes in the prices: arrows change color and direction, numbers rotate and change color
- every row in __TickersTable__ has add/remove button in __Track__ column so user can add/remove tickers from showing in __Display__
- every __Ticker__ in __Display__ has close button so user can remove the tickers from showing in __Display__
- charts can be shown/hidden with expand buttons in the __TickersTable__ first column
- settings allow user to specify prices renew interval
- added reducers tests 

![alt text](screenshots/1.png "Tickers demo screenshot")

### The following technologies were used:
- React with hooks
- Redux (@reduxjs/toolkit && react-redux)
- Socket.io 
- Material-UI
- Recharts
- Jest

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run your application
1. Open a new bash shell
2. ```cd client```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm run test``` or ```yarn test```

# Price Service Usage

URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.
