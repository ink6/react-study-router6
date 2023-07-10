import React from 'react'
import { useInRouterContext } from 'react-router-dom'
export default function Header() {
  console.log('Header ------ ',useInRouterContext());
  return (
    <div className="page-header">
      <h2>React Router Demo</h2>
    </div>
  )
}
