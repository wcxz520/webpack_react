export default {
  namespace: 'user',
  state: {
    userInfo: { login: false },
  },
  effects: {},
  reducers: {
    changeUserLogin(state, { payload }) {
      return { ...state, userInfo: { login: payload } }
    },
  },
}
