const validateGetBlogPost = require('./resolvers/functions/blog-post/Function.validateGetBlogPost.req.vtl');
const getBlogPostReq = require('./resolvers/functions/blog-post/Function.getBlogPost.req.vtl');

const sharedResponse = require('./resolvers/functions/shared/Function.sharedResponse.res.vtl');

module.exports = [
  {
    name: 'validateGetBlogPost',
    dataSource: 'None',
    request: validateGetBlogPost,
    response: sharedResponse,
  },
  {
    name: 'getBlogPost',
    dataSource: 'None',
    request: getBlogPostReq,
    response: sharedResponse,
  },
];
