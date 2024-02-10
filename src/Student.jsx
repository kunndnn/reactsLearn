import PropTypes from "prop-types";
function Student(props) {
  // const { name, age, isStudent } = props;
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
//prop types used for validating the prop data type will not stop the executon of program but issue a warning in console
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};
//default props
Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};
export default Student;
