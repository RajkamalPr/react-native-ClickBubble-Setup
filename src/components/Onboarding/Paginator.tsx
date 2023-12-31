import { StyleSheet, Animated, useWindowDimensions, View } from "react-native"

const Paginator = ({ data, scrollX }: any) => {
    const { width } = useWindowDimensions();
    return (<View style={styles.container}>
        {data.map((_: any, i: number) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
            const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [10, 20, 10],
                extrapolate: 'clamp'
            })
            return <Animated.View style={[styles.dot, { width: dotWidth }]} key={i.toString()} />;
        })}
    </View>)
}

export default Paginator

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        height: 64
    },
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8,
    }
})