// const fs = require('fs')
// const path = require('path')
// const { execSync } = require('child_process')

/** @type {import('cz-git').UserConfig} */
module.exports = {
  ignores: [(commit) => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
}
