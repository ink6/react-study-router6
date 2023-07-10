import React from 'react'
// params方式
// import { useMatch, useParams } from 'react-router-dom'
import { useSearchParams, useLocation } from 'react-router-dom'
export default function Detail() {
  // 获取URL中携带过来的params参数
  // const { id, title, content } = useParams()
  // const matchParams = useMatch('/home/message/detail/:id/:title/:content')
  // console.log(matchParams); // { params: {id: '004', title: '消息4', content: '粒粒皆幸苦'}, pathname: 'xxx', ......}

  const [search, setSeatch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')

  console.log(useLocation()); //pathname: "/home/message/detail",search: "?id=666&title=%E5%98%BB%E5%98%BB&content=%E5%93%88%E5%93%88",state: null

  function changeSearch () {
    setSeatch('id=666&title=嘻嘻&content=哈哈')
  }
  return (
    <div>
      <ul>
        <li>id的值是： { id }</li>
        <li>title的值是： { title }</li>
        <li>content的值是： { content }</li>
      </ul>
      <button onClick={ changeSearch }>修改search</button>
    </div>
  )
}
