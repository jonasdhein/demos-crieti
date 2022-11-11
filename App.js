import { StatusBar } from "expo-status-bar";
import ViewEffect from "./src/screens/ViewEffect";
import ViewState from "./src/screens/ViewState";

export default function App() {
  return (
    <>
      <ViewEffect />

      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        style="auto" />
    </>
  );
}