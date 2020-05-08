import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import Menu from "./menu";
import MenuSub from "./menu-sub";
import "./category.scss";

const MENU_LIST = [
  {
    category_id: 1,
    title: "热销商品",
    list: []
  },
  {
    category_id: 2,
    title: "新品上架",
    list: []
  },
  {
    category_id: 3,
    title: "手机专区",
    list: [
      {
        category_id: 3,
        spu_id: 1,
        spu_name: "荣耀 30 Pro",
        label: "爆款,超长待机",
        desc: "下单立即优惠180，赠送半年屏保",
        price: "4399",
        ori_price: "4399",
        paidNum: 531,
        image_url: require("./assets/honor30pro.jpg")
      },
      {
        category_id: 3,
        spu_id: 2,
        spu_name: "HUAWEI P40",
        label: "莱卡拍照",
        desc: "下单立享12期免息，赠送半年屏保",
        price: "4188",
        ori_price: "4188",
        paidNum: 203,
        image_url: require("./assets/p40.jpg")
      },
      {
        category_id: 3,
        spu_id: 3,
        spu_name: "HUAWEI Nova 7",
        label: "超长待机",
        desc: "送耳机，12期免息",
        price: "3588",
        ori_price: "3588",
        paidNum: 188,
        image_url: require("./assets/nova7.jpg")
      }
    ]
  },
  {
    category_id: 4,
    title: "专属配件",
    list: []
  }
];

class Category extends Component {
  config = {
    navigationBarTitleText: "奈斯数码商城"
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      menu: MENU_LIST,
      subMenu: MENU_LIST[0],
      value: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onChange(value) {
    this.setState({
      value: value
    });
  }

  handleMenu = id => {
    var subMenu = this.state.menu.find(item => item.category_id === id) || [];
    this.setState({ current: id, subMenu });
  };

  render() {
    const { current, menu, subMenu } = this.state;

    return (
      <View className="category">
        <View className="category__header">
          <View className="category__header-search">
            <View className="at-icon at-icon-search"></View>
          </View>
        </View>
        <Menu
          current={current}
          list={menu}
          onClick={this.handleMenu.bind(this)}
        />
        <MenuSub current={current} subList={subMenu} />
      </View>
    );
  }
}

export default Category;
