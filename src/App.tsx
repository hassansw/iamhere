import { Fragment } from "react";
import { StatusBar } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <Fragment>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </Fragment>
  );
}
