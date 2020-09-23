import { create } from 'dva-core'
import { createLogger } from 'redux-logger'
import createLoading from 'dva-loading'

import user from './user'

const models = [user]

const dva = create({ onAction: [createLogger()] })
dva.use(createLoading())

models.forEach((model) => dva.model(model))
dva.start()

const store = dva._store

export default store
