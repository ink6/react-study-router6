import React from 'react'
import { useInRouterContext } from 'react-router-dom'
export default function Demo() {
  console.log('Demo ------ ', useInRouterContext());
  return (
    <div>
      这个一个没有包裹在browserRouter里面的组件
    </div>
  )
}
