# [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.battery) check for [can.js](https://github.com/canjs)

## Installation

**Note:** Please make sure that you installed [can.js](https://github.com/canjs/can) before.

1. `bower install --save canjs/battery`
2. Add references to your HTML.

## Available detections

### can.use('battery', callback)

Checks if the browser provides the [Battery API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator.battery).

```javascript
can.use('battery', function (err, supports) {
    if (supports) {
        // Do something special.
    }
});
```

## Author

Copyright 2014, [konexmedia](http://konexmedia.com)