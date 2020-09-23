const get = async (url) => {
  try {
    const res = await fetch(url)
    console.log(res)
    if (res.status === 200) {
      const r = res.json()
      return Promise.resolve(r)
    }
  } catch (error) {
    console.error('请求失败:' + error)
    throw error
  }
}

const post = () => {
  console.log('post', PROJECT_GLOBAL)
}

export default {
  get,
  post,
}
