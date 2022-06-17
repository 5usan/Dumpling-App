import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const IconContainer = ({icon, color, size}) => {
  return (
    <View style={styles.iconContainer(size)}>
      <FontAwesomeIcon icon={icon} color={color} size={size} />
    </View>
  );
};

export default IconContainer;
const styles = StyleSheet.create({
  iconContainer: size => ({
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }),
});
