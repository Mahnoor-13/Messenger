// // import React, { useState } from "react";
// // import {
// //   Text,
// //   View,
// //   SafeAreaView,
// //   StyleSheet,
// //   FlatList,
// //   Pressable,
// //   TextInput,
// //   Dimensions,
// // } from "react-native";
// // import Constants from "expo-constants";

// // const width = Dimensions.get("window").width;

// // const Item = ({ text }) => (
// //   <View style={styles.message}>
// //     <TextInput style={styles.messageText} value={text} />
// //   </View>
// // );

// // export default function App() {
// //   let scrollRef = React.useRef(null);

// //   const [DATA, setDATA] = useState([
// //     {
// //       text: "5",
// //     },
// //     {
// //       text: "4",
// //     },
// //     {
// //       text: "3",
// //     },
// //     {
// //       text: "2",
// //     },
// //     {
// //       text: "1",
// //     },
// //   ]);

// //   const addMessage = () => {
// //     let number = Math.random() * 100;
// //     let objectToUnShift = {
// //       text: `${Math.floor(number)}`,
// //     };
// //     let DATA_copy = Array.from(DATA);
// //     DATA_copy.push(objectToUnShift);
// //     setDATA(DATA_copy);
// //   };

// //   const renderItem = ({ item }) => <Item text={item.text} />;

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <FlatList
// //         ref={(it) => (scrollRef.current = it)}
// //         data={DATA}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id}
// //         onContentSizeChange={() =>
// //           scrollRef.current?.scrollToEnd({ animated: true, index: "" })
// //         }
// //         contentContainerStyle={styles.flatlist}
// //       />

// //       <Pressable
// //         onPress={() => {
// //           addMessage();
// //         }}
// //         style={styles.addMessageButton}
// //       >
// //         <Text>Add Message</Text>
// //       </Pressable>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   addMessageButton: {
// //     alignItems: "center",
// //     backgroundColor: "red",
// //     height: 50,
// //     justifyContent: "center",
// //     width: "100%",
// //   },
// //   container: {
// //     justifyContent: "center",
// //     paddingTop: Constants.statusBarHeight,
// //     backgroundColor: "#ecf0f1",
// //     padding: 8,
// //     height: "100%",
// //     width: width,
// //   },
// //   flatlist: {
// //     display: "flex",
// //     alignItems: "flex-end",
// //     justifyContent: "flex-end",
// //     flexGrow: 1,
// //   },
// //   message: {
// //     alignItems: "center",
// //     backgroundColor: "#45bbe6",
// //     borderRadius: 70,
// //     height: 40,
// //     justifyContent: "center",
// //     margin: 4,
// //     marginRight: 10,
// //     width: 80,
// //   },
// //   messageText: {
// //     fontSize: 14,
// //   },
// // });

// import React from 'react';
// import {
//   FlatList,
//   Animated,
//   SafeAreaView,
//   Pressable,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';
// import ListRow from './ListRow-finished';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       people: [],
//       data: [],
//     };
//     this.scrollRef = null;
//   }

//   handleAdd = async () => {
//     try {
//       this.setState({
//         data: [Math.random() * 100, ...this.state.data],
//       });
//     } catch (err) {
//       alert(JSON.stringify(err));
//     }
//   };
//   render() {
//     return (
//       <SafeAreaView
//         style={{
//           justifyContent: 'center',
//           backgroundColor: '#ecf0f1',
//           padding: 8,
//           height: '100%',
//           justifyContent: 'flex-end',
//         }}
//       >
//         <FlatList
//           style={{marginTop: 20}}
//           data={this.state.data}
//           showsVerticalScrollIndicator={false}
//           snapToAlignment="center"
//           decelerationRate={'fast'}
//           ref={'flatList'}
//           renderItem={({item, index}) => (
//             <ListRow {...item} text={item} index={index} />
//           )}
//           keyExtractor={item => item.text}
//           legacyImplementation={false}
//           alwaysBounceVertical={item => item.text}
//           keyExtractor={item => item.id}
//           onContentSizeChange={() =>
//             this.refs.flatList?.scrollToEnd({animated: true})
//           }
//           contentContainerStyle={styles.flatlist}
//         />

//         <Pressable
//           onPress={this.handleAdd}
//           style={{
//             alignItems: 'center',
//             backgroundColor: 'red',
//             height: 50,
//             justifyContent: 'center',
//             width: '100%',
//           }}
//         >
//           <Text>Add Message</Text>
//         </Pressable>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   addMessageButton: {
//     alignItems: 'center',
//     backgroundColor: 'red',
//     height: 50,
//     justifyContent: 'center',
//     width: '100%',
//   },
//   container: {
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//     height: '100%',
//     justifyContent: 'flex-end',
//   },
//   flatlist: {
//     // height:10,
//     // display: 'flex',
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//     flexGrow: 1,
//   },
//   message: {
//     alignItems: 'center',
//     backgroundColor: '#45bbe6',
//     borderRadius: 70,
//     height: 40,
//     justifyContent: 'center',
//     margin: 4,
//     marginRight: 10,
//     width: 80,
//   },
//   messageText: {
//     fontSize: 14,
//   },
// });

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

const dim = Dimensions.get("window");

const Item = ({ text }) => (
  <View style={text ? styles.message : { backgroundColor: "#ecf0f1" }}>
    <TextInput style={styles.messageText} value={text} />
  </View>
);

export default function App() {
  console.log(dim.height);
  let scrollRef = React.useRef(null);
  // const [height, setHeight] = React.useState(dim.height );

  const [DATA, setDATA] = useState([
    // {
    //   text: false,
    // },
    // {
    //   text: '3',
    // },
    // {
    //   text: '2',
    // },
    // {
    //   text: '1',
    // },
  ]);

  useEffect(() => {
    const size =  dim.height /50;
    let data = [];
    for (let i = 0; i < size; i++) {
      data.push({ text: false });
    }
    // data.push({text:true})
    setDATA(data);
    // }
  }, []);

  const addMessage = () => {
    let number = Math.random() * 100;
    let objectToUnShift = {
      text: `${Math.floor(number)}`,
    };
    // let DATA_copy = Array.from(DATA);

    DATA.push(objectToUnShift);
    // setHeight((prev) => prev - dim.height);
    setTimeout(() => {
      // setDATA(DATA_copy);

      if (!DATA[0].text) {
        // alert(DATA[0].text)
        console.log(DATA);
        setDATA(DATA);
        setTimeout(() => {
          DATA.splice(0, 1);
        }, 100000);
        5;
      } else {
        console.log("-", DATA[0].text);

        setDATA(DATA);
      }

      // alert(DATA.length)
    }, 100);
  };

  const renderItem = ({ item }) => <Item text={item.text} />;

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{height: height}}> */}
      <FlatList
        // showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        alwaysBounceVertical={(item) => item.id}
        ref={(it) => (scrollRef.current = it)}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({
            animated: true,
            behaviour: "smooth",
            index: -1,
          })
        }
        contentContainerStyle={styles.flatlist}
      />
      {/* </View> */}
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
    // backgroundColor: 'pink',   padding: 8,
    height: "100%",
    justifyContent: "flex-end",
    width: dim.width,
  },
  flatlist: {
    // height:10,
    // display: 'flex',
    // flex:1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexGrow: 1,
    // marginBottom:100
    // height:100,
    // backgroundColor: "black"
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
  messageText: {
    fontSize: 14,
  },
});
