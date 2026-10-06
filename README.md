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

When a process is started by PM2, there is an IPC connection between the newly spawned process and PM2.
This IPC channel can prevent shutdown.
The `disconnectPm2()` function is provided to cut this IPC channel explicitely, and should be called when the process should exit unexpectedly, for example in a main try-catch.

Note that calling this function _before_ the end of your process will instruct PM2 to consider the process dead

```JavaScript
// Call this when your process is done
disconnectPm2();
```
