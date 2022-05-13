import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Home(props) {
    return (
        <View>
            <View>
                <Text>Input</Text>
            </View>
            <View>
                <Text>ScrollView horizontal</Text>
            </View>
            <View>
                <Text>Recientes</Text>
            </View>
            <Button
                title='detalle'
                onPress={() =>
                    props.navigation.navigate('Detail')
                }
            />
        </View>
    )
}