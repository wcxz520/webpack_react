import React, { useState, useEffect } from 'react'
import test from '@/services/test'
import shangc from '@/assets/images/shangc.png'
import { useDispatch, useSelector } from 'react-redux'

import '@/pages/home/index.less'

const Home = () => {
  const dispatch = useDispatch()
  const {
    user: { userInfo },
  } = useSelector((state) => state)
  const [name, setName] = useState('Home1')

  useEffect(() => {
    getUsername()
    return () => {}
  }, [])

  const getUsername = async () => {
    const res = await test.getUsernameById(123)
    console.log('res', res)
  }

  return (
    <div
      className="home"
      onClick={() => {
        dispatch({ type: 'user/changeUserLogin', payload: true })
      }}
    >
      {name} , {userInfo.login + ''}
      <img src={shangc} />
      <img src={require('@/assets/images/banner.jpg')} />
    </div>
  )
}

export default Home
