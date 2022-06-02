import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";

const dim = Dimensions.get("screen");

const Item = ({ text }) => (
  <View style={text !== "default" ? styles.message : styles.defaultmessage}>
    <TextInput
      style={styles.messageText}
      value={text === "default" ? "" : text}
    />
  </View>
);

export default function App() {
  console.log(dim.height);
  let scrollRef = React.useRef(null);
  const [height, setHeight] = React.useState(50);

  const [DATA, setDATA] = useState([]);

  useEffect(() => {
    const size = dim.height / 48;
    let data = [];
    for (let i = 0; i < Math.floor(size); i++) {
      data.push({ text: "default" });
    }
    setDATA(data);
  }, []);

  const addMessage = () => {
    let number = Math.random() * 100;
    let objectToUnShift = {
      text: `${Math.floor(number)}`,
    };
    DATA.push(objectToUnShift);
    setHeight((prev) => prev + 30);
    setTimeout(() => {
      if (DATA[0].text === "default") {
        setDATA(DATA);
        setTimeout(() => {
          DATA.splice(0, 1);
        }, 250);
      } else {
        setDATA(DATA);
      }
      scrollRef?.current?.scrollToEnd({
        animated: true,
        behaviour: "smooth",
        index: -1,
      });
    }, 100);
  };

  const renderItem = ({ item }) => <Item text={item.text} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        legacyImplementation={false}
        alwaysBounceVertical={(item) => item.id}
        ref={(it) => (scrollRef.current = it)}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
      />
      <Pressable
        onPress={() => {
          addMessage();
        }}
        style={styles.addMessageButton}
      >
        <Text>Add Message</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addMessageButton: {
    alignItems: "center",
    backgroundColor: "red",
    height: 50,
    justifyContent: "center",
    width: "100%",
  },
  container: {
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    height: "100%",
    justifyContent: "flex-end",
    width: dim.width,
  },
  flatlist: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  message: {
    alignItems: "center",
    backgroundColor: "#45bbe6",
    borderRadius: 70,
    height: 40,
    justifyContent: "center",
    margin: 4,
    marginRight: 10,
    width: 80,
  },
  defaultmessage: {
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    borderRadius: 70,
    height: 40,
    justifyContent: "center",
    margin: 4,
    marginRight: 10,
    width: 80,
  },
  messageText: {
    fontSize: 14,
  },
});
