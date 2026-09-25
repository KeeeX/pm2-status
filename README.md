# `@keeex/pm2-status`

Detect if the current process is running under PM2 and provide some settings from it.

This library provides four functions:

- `isPM2()`: return true if running under PM2
- `getInstanceId()`: return the identifier of the current instance, or `undefined` if
  not applicable.
- `isLogTimestamped()`: return true if running under PM2 and log timestamp is enabled
- `disconnectPm2()`: disconnect from PM2 (safe to call in any case)

## Installation

Install from `npmjs`:

```shell
npm install @keeex/pm2-status
```

## Usage

Import named functions from default export

```JavaScript
import {isPM2, disconnectPm2} from "@keeex/pm2-status";

if (isPM2()) {
  console.log("Yep, under PM2");
}
```

## Disconnecting from PM2

When your process is managed by PM2, you should call `disconnectPm2()` at the end of all processes that could be run under PM2. This function safely disconnects from PM2 and can be called in any case, even when not running under PM2.

```JavaScript
// Call this when your process is done
disconnectPm2();
```
