import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // 上面照抄，不懂的话看 MDN
    this.state = {
      date: new Date().toString()
    };
    setInterval(() => {
      // 搜索「JS 箭头函数 MDN」
      this.setState({
        date: new Date().toString() // 更新 date
      });
    },1000);
    console.log('初始化');
  }
  componentWillMount() {
    console.log('我要开始了');
  }
  render() {
    console.log('我要开始渲染了')
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h1>you'r age is {this.props.age}</h1>
        <h1>now time is {this.state.date}</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log('插到页面里了');
  }
}
export default Welcome;
