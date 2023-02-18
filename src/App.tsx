import Todos from "./components/Todos";
const DUMMYITEMS = ["Learn React", "Learn TS"];
function App() {
  return (
    <div>
      <Todos items={DUMMYITEMS} />
    </div>
  );
}

export default App;
