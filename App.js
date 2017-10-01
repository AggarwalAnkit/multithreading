import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    NativeModules,
    InteractionManager,
} from 'react-native';

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
    },
};

export default class App extends Component {
    state = {
        backgroundColor: 'white',
    };

    onJsComputationPress = () => {
        InteractionManager.runAfterInteractions(() => {
            for (i = 0; i < 1000000; i++) {
                console.log(i);
            }
            this.setState({ backgroundColor: 'yellow' });
        });
    };

    onNativeComputationPress = () => {
        NativeModules.WorkerModule.doWork();
        this.setState({ backgroundColor: 'yellow' });
    };

    render() {
        return (
            <View
                style={{ ...styles.containerStyle, backgroundColor: this.state.backgroundColor }}
            >
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onJsComputationPress}
                >
                    <Text>start JS computation</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={this.onNativeComputationPress}
                >
                    <Text>start Native computation</Text>
                </TouchableOpacity>
            </View>
        );
  }
}

