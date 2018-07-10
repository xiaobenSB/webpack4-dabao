import React, { Component } from 'react';
import Clock from "./clock.jsx";


class App extends Component {
	constructor(props) {
    super(props);
  }
	render() {
		return (
			<div id="clock">
				<div className="App-header">
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
				To get started, edit <code>src/entry.js</code> and save to reload.
				</p>
				<h3 className = "index-title">一、Conmponents(组件)和props(属性),事件处理程序</h3>
				<h3>1.2 Icon字体，JSX</h3>
				<h3 className = "index-title">二、State(状态)和生命周期</h3>
	             <Clock />
				
				<h3 className = "index-title">三、Lists和Keys</h3>

				<h3 className = "index-title">四、Forms(表单)</h3>
	
				<h3 className = "index-title">五、简单的评论</h3>

				<h3 className = "index-title">六、状态提升</h3>
			</div>
		);
	}
}

export default App;