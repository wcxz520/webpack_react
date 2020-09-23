import React from 'react'
import banner from '@/assets/images/banner.jpg'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import '@/pages/my/index.less'

const My = () => {
  const {
    user: { userInfo },
  } = useSelector((state) => state)

  return (
    <div className="my">
      My, {userInfo.login + ''}
      <img src={banner} />
      <Button type="primary">Primary Button</Button>
    </div>
  )
}

export default My
