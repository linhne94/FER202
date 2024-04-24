import './App.css';
import Ex11 from './components/Ex11';
import Ex5 from './components/Ex5';
import Ex6 from './components/Ex6';
import Ex8 from './components/Ex8';
import CreateProduct from './components/assignment/Layout/CreateProduct';
import CrudProduct from './components/assignment/Layout/CrudProduct';
import DetailProduct from './components/assignment/Layout/DetailProduct';
import ListProduct from './components/assignment/Layout/ListProduct';
import UpdateProduct from './components/assignment/Layout/UpdateProduct';
import CrudCompany from './components/demo/CrudCompany';
import Demo from './components/demo/Demo';
import Demo2 from './components/demo/Demo2';
import DemoReducer from './components/demo/DemoReducer';
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/lab2/Header';
import Main from './components/lab2/Main';
import Header5 from './components/lab5/Header5';
import Home from './components/lab5/Home';
import About from './components/lab5/About';
import Quizzes from './components/lab5/Quizzes';
import News from './components/lab5/News';
import Contact from './components/lab5/Contact';
import Quiz from './components/lab4/Quiz';
import View from './components/FetchJson/View';
import QuizApp from './components/lab3/QuizApp'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataProduct } from './components/assignment/redux/ProductReducer';
import ListUser from './components/userManagement/ListUser';
import CreateUser from './components/userManagement/CreateUser';
import UpdateUser from './components/userManagement/UpdateUser';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProduct());
  }, [dispatch])
  return (<>


    {/* <Ex6 /> */}
    {/* <Ex8 /> */}
    {/* <Ex11 /> */}
    {/* <Ex5 />   
    <Main /> */}
    {/* <Demo title="vl" />
     */}
    {/* <Demo2 /> */}
    {/* <DemoReducer /> */}
    {/* <CrudCompany /> */}
    {/*                 Lab2        */}
    {/* <Header />
    <Main /> */}
    {/*                 Lab2         */}
    <Header5 />

    {/* <Route path='/' element={<Quiz />} /> */}

    {/* Lab3 */}
    {/* Lab3 */}
    <Routes>
      {/* <Route path='/' element={<ListUser />} />
      <Route path='/create' element={<CreateUser />} />
      <Route path='/edit/:id' element={<UpdateUser />} /> */}
      {/* Assignment */}
      <Route path='/' element={<ListProduct />} />
      <Route path='/create' element={<CreateProduct />} />
      <Route path='/update/:id' element={<UpdateProduct />} />
      <Route path='/detail/:id' element={<DetailProduct />} />
      <Route path='/crud' element={<CrudProduct />} />
      {/* Assignment */}
      {/* <Route path='/quizzes' element={<Quiz />} /> */}
      {/* Lab5 */}
      {/* <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/quizzes' element={<Quiz />} />
      <Route path='/newspage' element={<News />} />
      <Route path='/contact' element={<Contact />} /> */}
      {/* Lab5 */}
    </Routes>

  </>)
}

// const styles = {
//   navbar: {
//     backgroundColor: '#333',
//     overflow: 'hidden',
//   },
//   navbarNav: {
//     listStyle: 'none',
//     padding: 0,
//     margin: 0,
//     display: 'flex',
//   },
//   navItem: {
//     padding: '14px 20px',
//   },
//   navLink: {
//     textDecoration: 'none',
//     color: 'white',
//     display: 'block',
//   },
//   activeNavItem: {
//     backgroundColor: '#4CAF50',
//   },
//   hoverNavItem: {
//     backgroundColor: '#555',
//   },
// };

// const Shape = ({ color, children }) => {
//   const style = {
//     color, // This could also be used to set the border or fill color in a real app
//     margin: "10px",
//     padding: "5px",
//   };


//   return <div style={style}>{children}</div>;
// };


// // Rectangle component
// const Rectangle = ({ color, length, width }) => {
//   const area = length * width;


//   return (
//     <Shape color={color}>
//       <p>Rectangle</p>
//       <p>Area: {area}</p>
//       <p>
//         Length: {length}, Width: {width}
//       </p>
//     </Shape>
//   );
// };


// // Triangle component
// const Triangle = ({ color, base, height }) => {
//   const area = (base * height) / 2;


//   return (
//     <Shape color={color}>
//       <p>Triangle</p>
//       <p>Area: {area}</p>
//       <p>
//         Base: {base}, Height: {height}
//       </p>
//     </Shape>
//   );
// };


// const courses = ["React", "ReactNative", "NodeJs"];

// function App() {

//   ///////// Bài Tập 1
//   console.log("/////////////// bài 1")
//   var people = [
//     { name: 'Jack', age: 50 },
//     { name: 'Michael', age: 9 },
//     { name: 'John', age: 40 },
//     { name: 'Ann', age: 19 },
//     { name: 'Elisabeth', age: 16 }
//   ];

//   const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
//   console.log("First teenager:", firstTeenager);

//   const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
//   console.log("All teenagers:", allTeenagers);

//   const allAreTeenagers = people.every(person => person.age >= 10 && person.age <= 20);
//   console.log("Are all teenagers?", allAreTeenagers);

//   const anyIsTeenager = people.some(person => person.age >= 10 && person.age <= 20);
//   console.log("Is any teenager?", anyIsTeenager);

//   ///////// Bài Tập 2
//   console.log("/////////////// bài 2")
//   const array = [1, 2, 3, 4];

//   const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//   console.log("Sum:", sum);

//   const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//   console.log("Product:", product);

//   ///////// Bài Tập 3
//   console.log("/////////////// bài 3")
// const companies = [
//   { name: "Company One", category: "Finance", start: 1981, end: 2004 },
//   { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//   { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
// ];

//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   const person = {
//     name: "Costas",
//     address: {
//       street: "Lalaland 12"
//     }
//   };

//   // Print the name of each company using forEach
//   companies.forEach(company => console.log(company.name));

//   // Print the name of each company that started after 1987
//   const after1987 = companies.filter(company => company.start > 1987);
//   after1987.forEach(company => console.log(company.name));

//   // Get only the companies that have category Retail, increment their start by 1
//   const retailCompanies = companies.filter(company => company.category === 'Retail').map(company => {
//     company.start++;
//     return company;
//   });
//   console.log(retailCompanies);

//   // Sort the companies based on their end date in ascending order
//   const sortedCompanies = companies.sort((a, b) => a.end - b.end);
//   console.log(sortedCompanies);

//   // Sort the ages array in descending order
//   const sortedAges = ages.sort((a, b) => b - a);
//   console.log(sortedAges);

//   // Print the sum if you add all the ages using reduce
//   const ageSum = ages.reduce((acc, curr) => acc + curr, 0);
//   console.log(ageSum);

//   // Make a new object that has the properties of name and category same as the first company and a method print
//   const { name, category } = companies[0];
//   const newObj = { name, category, print() { console.log(this.name); } };
//   newObj.print();

//   // Create a function that takes an unknown number of arguments that are numbers and return their sum
//   const sumNumbers = (...args) => args.reduce((acc, curr) => acc + curr, 0);
//   console.log(sumNumbers(1, 2, 3, 4));

//   // Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array
//   const addToArr = (...args) => args.reduce((acc, curr) => {
//     if (Array.isArray(curr)) {
//       acc.push(...curr);
//     } else {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
//   console.log(addToArr(1, 'hello', [2, 3], { name: 'John' }));

//   // Destructuring the property street in a variable named street from the object person
//   const { address: { street } } = person;
//   console.log(street);

//   // Write a function that every time you call it, it returns a number that increments starting from 0
//   const counter = (() => {
//     let count = 0;
//     return () => count++;
//   })();
//   console.log(counter());
//   console.log(counter());
//   console.log(counter());

//   // Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
//   const getQueryParams = url => {
//     const queryString = url.split('?')[1];
//     const params = {};
//     queryString.split('&').forEach(param => {
//       const [key, value] = param.split('=');
//       params[key] = value;
//     });
//     return params;
//   };
//   console.log(getQueryParams('https://example.com/path?name=John&age=30'));

//   return (<>
//     <nav style={styles.navbar}>
//       <ul style={styles.navbarNav}>
//         <li style={styles.navItem} className="nav-item active">
//           <a href="/" style={styles.navLink}>Home</a>
//         </li>
//         <li style={styles.navItem} className="nav-item">
//           <a href="/" style={styles.navLink}>About</a>
//         </li>
//         <li style={styles.navItem} className="nav-item">
//           <a href="/" style={styles.navLink}>Contact</a>
//         </li>
//       </ul>
//     </nav>
//     <div style={{ textAlign: "center" }}>
//       {" "}
//       {/* Center align the content */}
//       <img
//         src={logo}
//         alt="React Logo"
//         style={{ width: "200px", marginTop: "50px" }}
//       />{" "}
//       {/* Image with styles */}
//       <p style={{ fontStyle: "italic", color: 'blue' }}>
//         This is the React logo! <br />
//         (I don't know why it is here either)
//       </p>
//       <p>The library for web and native user interfaces</p>
//     </div>

//     <div className="App">
//       <h1>
//         Hello <span style={{ color: 'blue' }}>React</span>
//       </h1>

//       <div style={{ textAlign: 'justify' }}>
//         <h2>Course names</h2>
//         <ul>
//           {courses.map((course, index) => (
//             <li key={index}>{course}</li>
//           ))}
//         </ul>
//       </div>

//       <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <tr style={{ backgroundColor: '#f2f2f2' }}>
//           <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
//           <th style={{ border: '1px solid #ddd', padding: '8px' }}>Category</th>
//           <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start</th>
//           <th style={{ border: '1px solid #ddd', padding: '8px' }}>End</th>
//         </tr>
//         {
//           retailCompanies && retailCompanies.map(company => (
//             <tr style={{ backgroundColor: '#f2f2f2' }}>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{company.name}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{company.category}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{company.start}</td>
//               <td style={{ border: '1px solid #ddd', padding: '8px' }}>{company.end}</td>
//             </tr>
//           ))
//         }
//       </table>
//     </div>
//     <div>
//       <h1>Shapes</h1>
//       <Rectangle color="blue" length={50} width={20} />
//       <Triangle color="red" base={30} height={15} />
//     </div>

//   </>);
// }


export default App;
