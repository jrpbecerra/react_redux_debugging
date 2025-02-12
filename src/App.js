import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";
import { Routes } from "./Routes";


export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
