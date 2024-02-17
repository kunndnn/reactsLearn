import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineappple", calories: 52 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 105 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 20 },
    { id: 9, name: "corn", calories: 59 },
    { id: 10, name: "broccoli", calories: 52 },
  ];
  return (
    <>
      {/* {short circuit} */}
      {fruits.length && <List items={fruits} category="Fruits" />}
      {vegetables.length ? (
        <List items={vegetables} category="Vegetables" />
      ) : null}
    </>
  );
}

export default App;
