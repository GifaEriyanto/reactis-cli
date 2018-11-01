const chalk = require('chalk')
const ora = require('ora')
const cmd = require('node-cmd')

const createProject = ({ projectName }) => {
  const spinner = ora('Creating a new Reactism Project...').start()
  cmd.get(`
    git clone --depth=1 https://github.com/dtcoss/reactism.git ${ projectName }
    cd ${ projectName }
    rm -rf .git
  `, (err) => {
    if (!err) {
      spinner.color = 'green'
      spinner.succeed([`Thanks for using ${chalk.cyan('Reactism')} as your React Boilerplate. ENJOY!!!`])
    } else {
      spinner.color = 'red'
      spinner.fail([`${chalk.red('Something wrong')}`])
    }
  })
}

module.exports = { createProject }
