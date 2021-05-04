import React from 'react'
import useRequestData from '../../hooks/useRequestData'

function HomePage(){
  const restaurants = useRequestData({}, 'restaurants')
  
  return <div>HomePage</div>
}

export default HomePage