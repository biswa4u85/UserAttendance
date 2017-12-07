import React from 'react';
import { View } from 'react-native';
const CardSection = ({ children, style }) => {
    return (React.createElement(View, { style: [styles.containerStyle, style] }, children));
};
const styles = {
    containerStyle: {
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};
export { CardSection };
//# sourceMappingURL=CardSection.js.map