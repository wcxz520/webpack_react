module.exports = {
  base: {},
  development: {
    ...this.base,
    baseUrl: 'http://localhost:8888',
  },
  test: {
    ...this.base,
    baseUrl: 'http://meian.expressgo.cn/logistics',
  },
  production: {
    ...this.base,
    baseUrl: 'http://meian.expressgo.cn/logistics',
  },
}
