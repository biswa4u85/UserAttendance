import React from 'react';
import { View } from 'react-native';
export const Card = ({ children }) => {
    return (React.createElement(View, { style: styles.containerStyle }, children));
};
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
//# sourceMappingURL=Card.js.map