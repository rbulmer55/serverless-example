// const { getRegexes } = require('@example/regex-validation');
// const { getMessages } = require('@example/messages');
// const { getConfig } = require('@example/api-config');
// const { getEnums } = require('@example/api-enums');
// const { getAppsyncLogConfig } = require('@example/serverless-helpers');

const customResources = require('./src/resources');
const customOutputs = require('./src/outputs');
const customDataSources = require('./src/data-sources');
const customFunctions = require('./src/function-configurations');
const customSchemas = require('./src/schema');
const customMappingTemplates = require('./src/mapping-templates');

module.exports = {
  service: {
    name: 'example',
  },
  // serverless configuration values
  provider: {
    name: 'aws',
    region: 'eu-west-1',
    stage: 'dev',
  },
  // serverless plugins
  plugins: ['serverless-appsync-plugin'],
  custom: {
    // splitstacks plugin for splitting cloud formation stacks in serverless
    /* 
    splitStacks: {
      perFunction: true,
    },
    */
    // custom default variables
    prefix: '${self:service}-${self:provider.stage}',
    // aws appsync API configuration
    appSync: [
      {
        // appsync authentication configuration
        name: '${self:custom.prefix}-appsync-api',
        authenticationType: 'API_KEY',
        // appsync logging iam role configuration
        // logConfig: getAppsyncLogConfig(),
        // appsync graphql schemas
        schema: [...new Set([customSchemas])],
        // appsync mapping templates configuration
        mappingTemplates: [customMappingTemplates],
        // appsync function configurations
        functionConfigurations: [customFunctions],
        mappingTemplatesLocation: '.',
        // appsync data sources
        dataSources: [customDataSources],
        // vtl substitutions
        substitutions: {
          //..getConfig(),
          //...getRegexes(),
          //...getMessages(),
          //...getEnums(),
        },
      },
    ],
  },
  resources: {
    // additional resource properties
    Resources: {
      customResources,
    },
    // cloud formation outputs
    Outputs: {
      customOutputs,
    },
  },
};
