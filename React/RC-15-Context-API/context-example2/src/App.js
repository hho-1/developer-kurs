import UserContextProvider from "./context/UserContextProvider";
import Home from "./pages/Home";

function App() {
  return (
    <UserContextProvider>
      <Home />
    </UserContextProvider>
  );
}
export default App;
