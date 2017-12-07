import React from 'react'
import {TouchableWithoutFeedback, View, Text} from 'react-native'
import {CardSection} from './CardSection'

export const ListItem : any = ({data, onPress}) => {

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>
                        {data.name}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles : any = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}