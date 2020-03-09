import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtAvatar } from "taro-ui";
import { add, minus, asyncAdd } from "../../actions/counter";
import MenuGrid from "./menuGrid";
import Menu from "./menu";
import "./user.scss";

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: "我的"
  };

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userInfo: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onGotUserInfo = () => {
    let that = this;
    Taro.showLoading({
      title: "登陆中",
      icon: "none"
    });
    Taro.getUserInfo({
      success: function(res) {
        console.log(res.userInfo);
        that.setState(
          {
            isLogin: true,
            userInfo: res.userInfo
          },
          () => {
            Taro.hideLoading();
          }
        );
      },
      fail: function(err) {
        that.requestFailed();
      }
    });
  };

  render() {
    const { isLogin, userInfo } = this.state;

    return (
      <View className="user">
        <View className="user__header">
          {isLogin ? (
            <View className="user__header--wrap">
              <AtAvatar
                className="user__header--avator is-login"
                image={userInfo.avatarUrl}
              />
              <Button className="user__header--login">
                {userInfo.nickName}
              </Button>
            </View>
          ) : (
            <View className="user__header--wrap">
              <View className="user__header--avator"></View>
              <Button
                className="user__header--login"
                open-type="getUserInfo"
                onGetUserInfo={this.onGotUserInfo}
              >
                点击登陆
              </Button>
            </View>
          )}
        </View>

        {/* 我的订单 */}
        <MenuGrid />

        {/* 菜单列表 */}
        <Menu />
      </View>
    );
  }
}

export default Index;
