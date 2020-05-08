import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import "./index.scss";

class Menu extends Component {
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

  onChange(value) {
    this.setState({
      value: value
    });
  }

  handleClick = id => {
    this.props.onClick(id);
  };

  render() {
    const { current, list } = this.props;

    return (
      <View className="menu">
        {list.map(item => {
          const active = item.category_id === current;
          return (
            <View
              className="menu__wrap"
              key={item.category_id}
              onClick={this.handleClick.bind(this, item.category_id)}
            >
              <Text className={classNames(active && "menu__wrap-title-active")}>
                {item.title}
              </Text>
              <View
                className={classNames(active && "menu__wrap-bar-active")}
              ></View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Menu;
