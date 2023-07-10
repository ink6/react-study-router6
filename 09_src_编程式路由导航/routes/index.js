import { Navigate } from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          // { // 使用params传参注册路由
          //   path: 'detail/:id/:title/:content',
          //   element: <Detail/>
          // }
          // { // 使用search传参注册路由
          //   path: 'detail',
          //   element: <Detail/>
          // },
          { // 使用state传参注册路由
            path: 'detail',
            element: <Detail/>
          }
        ]
      },
      {
        path: '',
        element: <Navigate to="news" />
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  },
]