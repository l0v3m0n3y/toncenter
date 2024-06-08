# toncenter
JavaScript library for https://toncenter.com
# main
```js
const {toncenter} = require('./toncenter');

const ton = new toncenter();
ton.wallet("address").then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});
```
