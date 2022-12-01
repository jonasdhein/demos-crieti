import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width * 0.9;

const ViewSkeleton = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333' }}>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          borderRadius={8}
          height={80}
          margin={8}
        />
      </SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item
          borderRadius={8}
          height={80}
          margin={8}
        />
      </SkeletonPlaceholder>
    </View>
  );
}

export default ViewSkeleton;