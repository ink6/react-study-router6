import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {
	function computedActiveClass({isActive}) {
		return isActive? 'list-group-item atguigu': 'list-group-item'
	}
	return (
		<div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header"><h2>React Router Demo</h2></div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						<NavLink className={computedActiveClass} to="/about">About</NavLink>
						<NavLink className={computedActiveClass} to="/home">Home</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div className="panel-body">
							<Routes>
								<Route path="/about" element={ <About />} />
								<Route path="/home" element={ <Home />} />
								<Route path="/" element={ <Navigate to="/about" />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
