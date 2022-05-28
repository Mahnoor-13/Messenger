import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';

const ANIMATION_DURATION = 250;
const ROW_HEIGHT = 90;

class ListRow extends Component {
  constructor(props) {
    super(props);

    this._animated = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start();
  }

  render() {
    const {text} = this.props;

    const rowStyles = [
      styles.row,
      {
        height: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ROW_HEIGHT],
        }),
      },
      {opacity: this._animated},
      {
        transform: [
          {scale: this._animated},
          {
            rotate: this._animated.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ['30deg', '0deg', '0deg'],
              //   extrapolate: 'clamp',
            }),
          },
        ],
      },
    ];

    return (
      <Animated.View style={[rowStyles, styles.message]}>
        <View style={styles.message}>
          <Text style={styles.messageText}>{text}</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: ROW_HEIGHT,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  email: {
    fontSize: 14,
  },
  message: {
    alignItems: 'center',
    backgroundColor: '#45bbe6',
    borderRadius: 70,
    height: 40,
    justifyContent: 'center',
    margin: 4,
    marginRight: 10,
    width: 80,
  },
  messageText: {
    fontSize: 14,
  },
});

export default ListRow;
