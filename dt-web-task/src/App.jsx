import Header from "./components/layout/Header";
import Notification from "./components/layout/Notification";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/Home";

function App() {


  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Home />
        </div>
        <Notification/>
      </div>
    </>
  );
}

export default App;
