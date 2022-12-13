import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    row: {
        flexDirection: "row",
        alignSelf: "flex-start",
        marginVertical: 10,
    },
    blank: {
        borderBottomWidth: 2,
        borderColor: "grey",
        width: 100,
    },
    optionsContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default styles;