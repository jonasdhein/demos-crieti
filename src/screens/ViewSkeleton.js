import React from 'react';
import { Dimensions, Text, View } from 'react-native';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('window').width * 0.9;

const ViewSkeleton = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333' }}>
      {/* <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          borderRadius={8}
          height={60}
          marginTop={8}
          marginHorizontal={8}
        />
      </SkeletonPlaceholder> */}
    </View>
  );
}

export default ViewSkeleton;