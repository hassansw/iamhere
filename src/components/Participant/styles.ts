import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 16
  },
  buttonUpdate: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E2A23C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12
  },
  buttonRemove: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16
  }
})