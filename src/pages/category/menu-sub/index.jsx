import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import "./index.scss";

// const MENU_SUB_LIST = [
//   {
//     category_id: 3,
//     title: "手机专区",
//     list: [
//       {
//         category_id: 3,
//         spu_id: 1,
//         spu_name: "荣耀 30 Pro",
//         label: "爆款,超长待机",
//         desc: "下单立即优惠180，赠送半年屏保",
//         price: "4399",
//         ori_price: "4399",
//         paidNum: 531,
//         image_url: require("./assets/honor30pro.jpg")
//       },
//       {
//         category_id: 3,
//         spu_id: 2,
//         spu_name: "HUAWEI P40",
//         label: "莱卡拍照",
//         desc: "下单立享12期免息，赠送半年屏保",
//         price: "4188",
//         ori_price: "4188",
//         paidNum: 203,
//         image_url: require("./assets/p40.jpg")
//       },
//       {
//         category_id: 3,
//         spu_id: 3,
//         spu_name: "HUAWEI Nova 7",
//         label: "超长待机",
//         desc: "送耳机，12期免息",
//         price: "3588",
//         ori_price: "3588",
//         paidNum: 188,
//         image_url: require("./assets/nova7.jpg")
//       }
//     ]
//   }
// ];

class MenuSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  static defaultProps = {
    list: []
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange = value => {
    this.setState({
      value: value
    });
  };

  showStorePage = () => {
    Taro.navigateTo({
      url: "/pages/store/store"
    });
  };

  render() {
    const { subList } = this.props;

    return (
      <View className="menu-sub">
        <View className="menu-sub__title">{subList.title}</View>
        {subList.list.map(item => {
          return (
            <View
              className="menu-sub__item"
              key={item.spu_id}
              onClick={this.showStorePage.bind(this)}
            >
              <View className="menu-sub__item-wrap">
                <Image
                  src={item.image_url}
                  className="menu-sub__item-img"
                ></Image>
                <View className="menu-sub__item-text">{item.spu_name}</View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default MenuSub;
