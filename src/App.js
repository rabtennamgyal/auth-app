import SignUp from "./components/signup";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
