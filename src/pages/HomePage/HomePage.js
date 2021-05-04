import React from 'react'
import useRequestData from '../../hooks/useRequestData'

function HomePage(){
  const restaurants = useRequestData({}, 'restaurants')
  console.log(restaurants)
  return <div>HomePage</div>
}

export default HomePage