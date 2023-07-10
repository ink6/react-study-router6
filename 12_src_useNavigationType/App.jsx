import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
export default function App() {
	//根据路由表生成对应的路由规则
	const elements = useRoutes(routes)
	// console.log(666, elements);
	return (
		<div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<Header />
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
						<NavLink className="list-group-item" to="/about">About</NavLink>
						{/* <NavLink className="list-group-item" to="/home">Home</NavLink> */}
						{/* end: 当匹配到子路由时候 该标签失去高亮功能 */}
						<NavLink className="list-group-item" end to="/home">Home</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							{/* <Routes>
								<Route path="/about" element={ <About />} />
								<Route path="/home" element={ <Home />} />
								<Route path="/" element={ <Navigate to="/about" />} />
							</Routes> */}

							{/* 注册路由 */}
							{ elements }
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
