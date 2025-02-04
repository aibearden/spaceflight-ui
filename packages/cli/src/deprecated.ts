import chalk from "chalk"

export const DEPRECATED_MESSAGE = chalk.yellow(
  `\nNote: The spaceflight-ui CLI is going to be deprecated soon. Please use ${chalk.bold(
    "npx spaceflight"
  )} instead.\n`
)
