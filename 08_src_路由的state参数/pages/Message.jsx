import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
export default function Message() {
  const [ msgList ] = useState([
    { id: '001', title: '消息1', content: '锄禾日当午'},
    { id: '002', title: '消息2', content: '汗滴禾下土'},
    { id: '003', title: '消息3', content: '谁知盘中餐'},
    { id: '004', title: '消息4', content: '粒粒皆幸苦'}
  ])
  return (
    <div>
      <ul>
        {
          msgList.map(msg => {
            return (
              <li key={ msg.id }>
                {/* 使用params传参路由链接 */}
                {/* <Link to={ `detail/${msg.id}/${msg.title}/${msg.content}` }> { msg.title } </Link>&nbsp;&nbsp; */}

                {/* 使用search传参路由链接 */}
                {/* <Link to={ `detail?id=${msg.id}&title=${msg.title}&content=${msg.content}` }> { msg.title } </Link>&nbsp;&nbsp; */}
                
                {/* 使用state传参路由链接 */}
                <Link to='detail' state={{
                  id: msg.id,
                  title: msg.title,
                  content: msg.content,
                }}> { msg.title } </Link>&nbsp;&nbsp;
              </li>
            )
          })
        }
      </ul>
			{/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  )
}
