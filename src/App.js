import "./styles.css";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import { useTheme } from "./theme-context";
function Nav() {
  const { setTheme } = useTheme();
  function toggle() {
    console.log("hello");
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  }
  return <button onClick={toggle}> Toggle</button>;
}
export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "light" ? "violet" : "orange" }}
    >
      <Nav />
      <Cart />
      <ProductListing />
    </div>
  );
}
