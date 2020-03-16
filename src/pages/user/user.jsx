import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtAvatar } from "taro-ui";
import MenuGrid from "./menuGrid";
import Menu from "./menu";
import DefAvatar from "@assets/images/default-avatar.png";
import { connect } from "@tarojs/redux";
import * as actions from "@actions/user";
import "./user.scss";

@connect(state => state.user, { ...actions })
class User extends Component {
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
    // console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {
    this.setState({
      userInfo: this.props.userInfo
    });
  }

  componentDidHide() {}

  componentWillMount() {
    const token = Taro.getStorageSync("token");
    if (token) {
      Taro.showLoading({
        title: "登陆中",
        icon: "none"
      });
      this.autoGetUserInfo();
    }
  }

  autoGetUserInfo = () => {
    let that = this;
    Taro.getUserInfo({
      success: function(res) {
        const { encryptedData, iv } = res;
        that.props.dispatchUserInfo({ encryptedData, iv }).then(res => {
          that.setState({ userInfo: res, isLogin: true }, () => {
            Taro.hideLoading();
          });
        });
      }
    });
  };

  onGotUserInfo = () => {
    let that = this;
    Taro.showLoading({
      title: "登陆中",
      icon: "none"
    });
    Taro.login({
      success: function(res) {
        if (res.errMsg === "login:ok") {
          that.props.dispatchUserLogin({ code: res.code }).then(res => {
            if (res.accessToken) {
              that.autoGetUserInfo();
            }
          });
        }
      }
    });
  };

  updateUserInfo = () => {
    Taro.navigateTo({
      url: "/pages/user/profile/index"
    });
  };

  render() {
    const { isLogin, userInfo } = this.state;

    return (
      <View className="user">
        <View className="user__header">
          {isLogin ? (
            <View className="user__header--wrap">
              <Image
                className="user__header--avator is-login"
                src={userInfo.avatarUrl}
                onClick={this.updateUserInfo.bind(this)}
              />
              <Button
                className="user__header--login"
                onClick={this.updateUserInfo.bind(this)}
              >
                {userInfo.nickName}
              </Button>
            </View>
          ) : (
            <View className="user__header--wrap">
              <Image className="user__header--avator" src={DefAvatar} />
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

export default User;
