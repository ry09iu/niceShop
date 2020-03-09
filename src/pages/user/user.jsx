import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { AtAvatar, AtIcon } from "taro-ui";
import { add, minus, asyncAdd } from "../../actions/counter";
import GRID_ICON1 from "@assets/images/grid_obligation.png";
import GRID_ICON2 from "@assets/images/grid_tobeshipped.png";
import GRID_ICON3 from "@assets/images/grid_shipped.png";
import GRID_ICON4 from "@assets/images/grid_complete.png";
import ROW_ICON1 from "@assets/images/menu_address.png";
import ROW_ICON2 from "@assets/images/menu_service.png";
import ROW_ICON3 from "@assets/images/menu_about.png";

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
      userInfo: [],
      gridList: [
        { title: "待付款", src: GRID_ICON1 },
        { title: "待发货", src: GRID_ICON2 },
        { title: "待收货", src: GRID_ICON3 },
        { title: "待评价", src: GRID_ICON4 }
      ],
      menuList: [
        { title: "收货地址", src: ROW_ICON1 },
        { title: "联系客服", src: ROW_ICON2 },
        { title: "关于奈斯", src: ROW_ICON3 }
      ]
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
    const { isLogin, userInfo, gridList } = this.state;

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

        <View className="user__order--wrap">
          <View className="user__order--item-tab">
            <Text>我的订单</Text>
            <View className="user__order--item-tab-right">
              <Text>查看全部</Text>
              <View className="at-icon at-icon-chevron-right"></View>
            </View>
          </View>

          <View className="user__order--item-grid">
            {gridList.map((item, index) => {
              return (
                <View key={index} className="user__order--item-grid-inner">
                  <Image
                    src={item.src}
                    className="user__order--item-grid-icon"
                  ></Image>
                  <Text className="user__order--item-grid-text">
                    {item.title}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="user__menu--wrap">
          {menuList.map((item, index) => {
            return (
              <View key={index} className="user__menu--wrap-item">
                <View className="user__menu--wrap-item-left">
                  <Image
                    src={item.src}
                    className="user__menu--wrap-item-icon"
                  ></Image>

                  <Text className="user__menu--wrap-item-text">
                    {item.title}
                  </Text>
                </View>
                <View className="at-icon at-icon-chevron-right"></View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Index;
