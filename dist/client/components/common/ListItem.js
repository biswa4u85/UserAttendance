import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { CardSection } from './CardSection';
export const ListItem = ({ data, onPress }) => {
    return (React.createElement(TouchableWithoutFeedback, { onPress: onPress },
        React.createElement(View, null,
            React.createElement(CardSection, null,
                React.createElement(Text, { style: styles.titleStyle }, data.name)))));
};
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
//# sourceMappingURL=ListItem.js.map