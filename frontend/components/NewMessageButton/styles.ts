import { StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.tint,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "absolute",
        bottom: 20,
        right: 20,
    }
})

export default styles;