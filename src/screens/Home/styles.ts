import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1F1E25',
    color: '#FFFFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonUpdate: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#E2A23C",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16
  },
  listEmptyText: {
    color: "#FFFFFF",
    fontSize: 14,
    textAlign: "center"
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 16
  }
})