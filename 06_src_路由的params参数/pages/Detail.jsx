import React from 'react'
import { useMatch, useParams } from 'react-router'
export default function Detail() {
  // 获取URL中携带过来的params参数
  const { id, title, content } = useParams()
  const matchParams = useMatch('/home/message/detail/:id/:title/:content')
  console.log(matchParams); // { params: {id: '004', title: '消息4', content: '粒粒皆幸苦'}, pathname: 'xxx', ......}
  return (
    <div>
      <ul>
        <li>id的值是： { id }</li>
        <li>title的值是： { title }</li>
        <li>content的值是： { content }</li>
      </ul>
    </div>
  )
}
