Note: API is work in progress for this repository.

For serverless microclient examples see the client directory.

## Clients

We have two ReactJS microclients that have been setup using the create-react-app for deomonstration purposes.

## Serverless framework

Commands can be executed from each service level directory.

### `serverless deploy`

With correct AWS credentials set up within your command line you may run the serverless deploy command which will attempt to deploy the microclients to AWS S3.

The following npm scripts are set up for consistent and custom deployment strategies:

```
    "predeploy": "npm run build",
    "deploy": "serverless client deploy --verbose --no-confirm"
```

Therefore we can run the following to deploy to AWS

```
    npm run deploy
```

The following will run the predeploy command to build the client and then run serverless client deploy which uses the serverless-finch plugin.
