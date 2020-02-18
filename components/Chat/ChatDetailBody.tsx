import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';
import TimeDuration from './TimeDuration';

interface Props {
    userName: string;
    timeStamp: Date;
};

const ChatDetailBody: React.FunctionComponent<Props> = ({
    userName,
    timeStamp,
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={style.container}>
            <View style={style.topContentContainer}>
                <View style={style.timeContainer}>
                    <TimeDuration
                        date={timeStamp}
                    />
                </View>
            </View>
            <View style={[style.topContentData, {backgroundColor: theme.lightBottomColor}]}>
                <View style={style.dataContainer}>
                    <ThemedText styleKey="textColor" style={style.userNameStyle}>{userName}</ThemedText>
                </View>
            </View>
        </View>
    );
};

export default ChatDetailBody;

interface Style {
    container: ViewStyle;
    topContentContainer: ViewStyle;
    timeContainer: ViewStyle;
    dataContainer: ViewStyle;
    userNameStyle: TextStyle;
    topContentData: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 20,
        flex:1,
    },
    topContentContainer: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
    },
    topContentData: {
        flexDirection: 'row-reverse',
        flex: 2,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    timeContainer: {
        flex:1,
        alignItems: 'center',
    },
    dataContainer: {
        flex: 2,
        padding: 20,
    },
    userNameStyle: {
        fontSize: 14,
    }
})