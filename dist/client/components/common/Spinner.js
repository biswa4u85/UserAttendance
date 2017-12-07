import React from 'react';
import { View, ActivityIndicator } from 'react-native';
const Spinner = ({ size }) => {
    return (React.createElement(View, { style: styles.spinnerStyle },
        React.createElement(ActivityIndicator, { size: size || 'large' })));
};
const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};
export { Spinner };
//# sourceMappingURL=Spinner.js.map