import http from './http'

const getUsernameById = async (userguid) =>
  await http.get(
    `${PROJECT_GLOBAL.baseUrl}/calReffer/getUsernameById?userguid=${userguid}`
  )

export default {
  getUsernameById,
}
