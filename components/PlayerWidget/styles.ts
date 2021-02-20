import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 48,
        backgroundColor: "#252625",
        width: "100%",
        borderWidth: 2,
        borderColor: 'black',
    },
    row: {
        flexDirection: 'row',
    },
    progress: {
        height: 5,
        backgroundColor: '#bcbcbc',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 5,
        marginRight: 10
    },

    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10
    },
    artist: {
        color: 'lightgray',
        fontSize: 18
    },


})

export default styles