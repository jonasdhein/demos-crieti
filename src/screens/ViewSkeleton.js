import React from 'react';
import { Dimensions, Text, View } from 'react-native';
//import SkeletonLoader from "expo-skeleton-loader";

const { width, height } = Dimensions.get("window");

const ViewSkeleton = () => {
  return (
    // <SkeletonLoader>
    //   <SkeletonLoader.Container
    //     style={[{ flex: 1, flexDirection: "row" }, style]}
    //   >
    //     <SkeletonLoader.Item
    //       style={{
    //         width: size,
    //         height: size,
    //         borderRadius: size / 2,
    //         marginRight: 20,
    //       }}
    //     />
    //     <SkeletonLoader.Container style={{ paddingVertical: 10 }}>
    //       <SkeletonLoader.Item
    //         style={{ width: 220, height: 20, marginBottom: 5 }}
    //       />
    //       <SkeletonLoader.Item style={{ width: 150, height: 20 }} />
    //     </SkeletonLoader.Container>
    //   </SkeletonLoader.Container>
    // </SkeletonLoader>
    <View></View>
  );
}

export default ViewSkeleton;