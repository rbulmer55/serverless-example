const sharedRequest = require('./resolvers/pipelines/shared/Before.sharedRequest.req.vtl');
const sharedResponse = require('./resolvers/pipelines/shared/After.sharedResponse.res.vtl');

module.exports = [
  {
    type: 'Query',
    field: 'getBlogPost',
    request: sharedRequest,
    response: sharedResponse,
    kind: 'PIPELINE',
    functions: ['validateGetBlogPost', 'getBlogPost'],
  },
];
