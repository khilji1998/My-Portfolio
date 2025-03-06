import "./assets/styles/styles.css";
import Layout from "./layout";
import { About } from "./pages/about";
import Home from "./pages/home";
import { Qualification } from "./pages/qualification";
function App() {
  return (
    <>
      <Layout>
        <Home />
        <About />
        <Qualification/>
      </Layout>
    </>
  );
}

export default App;
