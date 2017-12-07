import React from 'react';
import { TouchableOpacity } from 'react-native';
export const Link = ({ onPress, children }) => {
    return (React.createElement(TouchableOpacity, { onPress: onPress, style: [styles.linkStyle] }, children));
};
const styles = {
    linkStyle: {}
};
//# sourceMappingURL=Link.js.map