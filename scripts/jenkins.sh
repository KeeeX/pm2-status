#!/bin/bash

set -e

npm clean-install

npm publish

echo "Jenkins script done"
