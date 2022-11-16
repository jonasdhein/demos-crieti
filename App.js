import { StatusBar } from "expo-status-bar";
import ViewEffect from "./src/screens/ViewEffect";
import ViewImages from "./src/screens/ViewImages";
import ViewPicker from "./src/screens/ViewPicker";
import ViewState from "./src/screens/ViewState";

export default function App() {
  return (
    <>
      <ViewPicker />

      <StatusBar
        translucent={false}
        backgroundColor="#fff"
        style="auto" />
    </>
  );
}