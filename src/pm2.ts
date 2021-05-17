/* eslint-disable no-process-env */

// Actual key for instance can be changed using envvar
const instanceVarName = process.env["instance_var"] ?? "NODE_APP_INSTANCE";

/**
 * Return the current instance number if ran in PM2.
 *
 * PM2 guarantees that all instances have different numbers.
 */
export const getInstanceId = (): number | undefined => {
  const candidate = process.env[instanceVarName];
  if (candidate === undefined) {
    return;
  }
  return parseInt(candidate, 10);
};

/**
 * Return true if currently running under PM2
 */
export const isPM2 = (): boolean => getInstanceId() !== undefined;

/**
 * Return true if the PM2 log have a timestamp prefixed to them
 */
export const isLogTimestamped = (): boolean => {
  if (!isPM2()) {
    return false;
  }
  const timeValue = process.env["time"];
  return timeValue === "true";
};
