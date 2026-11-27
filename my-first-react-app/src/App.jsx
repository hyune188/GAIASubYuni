import JSXExamples from './Component/JSXExample'
import UserCard from './Component/UserCard'
import Header1 from './Component/Header1'
import Sidebar from './Component/Sidebar'
import ProductCard from './Component/ProductCard'
import ProductList from './Component/ProductList'
import SimpleCounter from './Component/SimpleCounter'
import UserProfile from './Component/UserProfile'
import UserForm from './Component/UserForm'
import TodoList from './Component/TodoList'
import TemperatureConverter from './Component/TemperatureConverter'
import ShoppingCart from './Component/ShoppingCart'
import Exercise3 from './Component/Exercise3'

function App() {
  return (
    <div className="App">
      <JSXExamples></JSXExamples>
      <Header1></Header1>
      <Sidebar></Sidebar>
      <ProductCard></ProductCard>
      <ProductList></ProductList>
      <SimpleCounter></SimpleCounter>
      <UserProfile></UserProfile>
      <UserForm></UserForm>
      <TodoList></TodoList>
      <TemperatureConverter></TemperatureConverter>
      <ShoppingCart></ShoppingCart>

      <Exercise3></Exercise3>

      <header className="App-header">
        <h1>Welcome to React, Bruh!</h1>
        <p>This is my first React component</p>
        <p>current time: {new Date().toLocaleTimeString()}</p>
      </header>
      <UserCard
        name="John Doe"
        email="john@example.com"
        role="Developer"
        />
      <UserCard
        name="Jane Smith"
        email="jane@example.com"
        role="Designer"
        />
    </div>
  );
}

export default App

