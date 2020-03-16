import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import Banner from "./banner";
import Tips from "./tips";
import MenuGrid from "./menuGrid";
import "./home.scss";

class Index extends Component {
  config = {
    navigationBarTitleText: "奈斯数码商城"
  };

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <View className="home">
        <View className="home__header">
          <View className="home__header-search">
            <View className="at-icon at-icon-search"></View>
          </View>
        </View>
        <Banner />
        <Tips />
        <MenuGrid />
      </View>
    );
  }
}

export default Index;
