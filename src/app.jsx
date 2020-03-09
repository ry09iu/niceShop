import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  config = {
    pages: ["pages/home/home", "pages/user/user", "pages/index/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      custom: false,
      color: "#9b9b9b",
      selectedColor: "#616161",
      backgroundColor: "white",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/home/home",
          iconPath: "./assets/images/tab-bar/home_normal.png",
          selectedIconPath: "./assets/images/tab-bar/home_pressed.png",
          text: "首页"
        },
        {
          pagePath: "pages/user/user",
          iconPath: "./assets/images/tab-bar/user_normal.png",
          selectedIconPath: "./assets/images/tab-bar/user_pressed.png",
          text: "我的"
        }
      ]
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
