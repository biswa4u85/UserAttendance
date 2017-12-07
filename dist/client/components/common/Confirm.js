import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles;
    return (React.createElement(Modal, { visible: visible, transparent: true, animationType: "slide", onRequestClose: () => { } },
        React.createElement(View, { style: containerStyle },
            React.createElement(CardSection, { style: cardSectionStyle },
                React.createElement(Text, { style: textStyle }, children)),
            React.createElement(CardSection, null,
                React.createElement(Button, { onPress: onAccept }, "Yes"),
                React.createElement(Button, { onPress: onDecline }, "No")))));
};
const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};
export { Confirm };
//# sourceMappingURL=Confirm.js.map