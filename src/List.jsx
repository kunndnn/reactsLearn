import PropTypes from "prop-types";
export default function List(props) {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconut", calories: 159 },
  //     { id: 5, name: "pineappple", calories: 52 },
  //   ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical
  //   fruits.sort((a, b) => a.calories - b.calories); //numeric asending
  //   fruits.sort((a, b) => b.calories - a.calories); //numeric desending
  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); //low calories fruits
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100); //high calories fruits
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.defaultProps = {
  category: "Category",
  items: [],
};
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    //for array of objects
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
