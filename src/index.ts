import yargs from 'yargs';


/**
 * Arguments Parser
 */
const argv = yargs

  // Framework Initialize
  .command('configure', 'Initialize framework', 
    (yargs) => {}, 
    (argv) => {
      console.log('>>> Configure');
    }
  )
  
  // Framework Setup
  .command('setup', 'Scaffolds framework infrastructure based on the configuration', 
    (yargs) => {}, 
    (argv) => {
      console.log('>>> Setup');
    }
  )

  .option('name', {
    alias: 'n',
    type: 'string'
  })
  .option('verbose', {
    alias: 'v',
    type: 'string',
  })
  .option('overwrite', {
    alias: 'o',
    type: 'boolean',
    default: true
  })
  .help()
  .alias('help', 'h')
  .argv;

