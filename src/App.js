import { createElement,Fragment } from "react"
import "./tailwind.css" 
import Button from "./components/Button"
 
function App() {

  const name = 'Sarper'
  const todos = ['todo1', 'todo2', 'todo3']
  /*
  const h1 = createElement('h1', null, 'prototurk.com')
  const ul = createElement('ul',null, todos.map(todo => createElement('li',null,todo)))
  const button = createElement(Button, {
    text: 'Buton texti'
  }, null)
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul,button )
 */
  const searchFunction = () => {
    alert("test")
  }
 
  return (
    <>
    <div style={{padding:20}}>   
    <Button text="buton örneği"/>
    <Button text="buton örneği" variant="success"/>
    <Button text="buton örneği" variant="danger"/>
    <Button text="buton örneği" variant="warning"/>

    </div>
      <h1 tabIndex="3" style= {{color:'red', backgroundColor:'yellow'}}>prototurk.com</h1>
      <label htmlFor="search" tabIndex="2" onClick={searchFunction}>Arama</label>
      <input type="text" id="search" tabIndex="1" />
      <ul>
        {todos.map((todo,index)  => (
          <li key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );

}

export default App;
