import Student from "./Student";
function App() {
  return (
    <>
      <Student name="John Doe" age={30} isStudent={true} />
      <Student name="patrick" age={32} isStudent={false} />
      <Student name="squidward" age={43} isStudent={true} />
      <Student name="sandy" age={27} isStudent={true} />
      <Student name={"larry"} />
    </>
  );
}

export default App;
