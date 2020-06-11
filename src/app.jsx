import Taro, { Component } from "@tarojs/taro";
import { Provider, connect } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import * as actions from "@actions/user";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

@connect(state => state.user, { ...actions })
class App extends Component {
  config = {
    pages: [
        "pages/web/index",
      "pages/cart/cart",
      "pages/category/category",
      "pages/home/home",
      "pages/store/store",
      "pages/user/user",
      "pages/user/profile/index",
      "pages/index/index",
    ],
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
            pagePath: "pages/web/index",
            iconPath: "./assets/images/tab-bar/home_normal.png",
            selectedIconPath: "./assets/images/tab-bar/home_pressed.png",
            text: "网页"
          },
        {
          pagePath: "pages/home/home",
          iconPath: "./assets/images/tab-bar/home_normal.png",
          selectedIconPath: "./assets/images/tab-bar/home_pressed.png",
          text: "首页"
        },
        {
          pagePath: "pages/category/category",
          iconPath: "./assets/images/tab-bar/category_normal.png",
          selectedIconPath: "./assets/images/tab-bar/category_pressed.png",
          text: "分类"
        },
        {
          pagePath: "pages/cart/cart",
          iconPath: "./assets/images/tab-bar/cart_normal.png",
          selectedIconPath: "./assets/images/tab-bar/cart_pressed.png",
          text: "购物车"
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

  componentDidMount() {
    const token = Taro.getStorageSync("token");
    if (token) {
      let that = this;
      Taro.checkSession({
        success: function(res) {
          //session_key 未过期，并且在本生命周期一直有效
        },
        fail: function() {
          // session_key 已经失效，需要重新执行登录流程
          that.toLogin(); //重新登录
        }
      });
    }
  }

  toLogin = () => {
    let that = this;
    Taro.login({
      success: function(res) {
        if (res.errMsg === "login:ok") {
          that.props.dispatchUserLogin({ code: res.code });
        }
      }
    });
  };

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
