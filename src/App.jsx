import UserGreeting from "./UserGreeting";
function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="john doe" />
    </>
  );
}

export default App;
