const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://admin:kanban@ds137600.mlab.com:37600/kanban',
  port: process.env.PORT || 8000,
};

export default config;
