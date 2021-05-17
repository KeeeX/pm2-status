@keeex/pm2-status
=================
Detect if the current process is running under PM2 and provide some settings from it.

This library provides three functions:

- `isPM2()`: return true if running under PM2
- `getInstanceId()`: return the identifier of the current instance, or `undefined` if
  not applicable.
- `isLogTimestamped()`: return true if running under PM2 and log timestamp is enabled

Installation
------------
Install from `npmjs`:

```shell
npm install @keeex/pm2-status
```

Usage
-----
Import named functions from default export

```JavaScript
import {isPM2} from "@keeex/pm2-status";

if (isPM2()) {
  console.log("Yep, under PM2");
}
```
