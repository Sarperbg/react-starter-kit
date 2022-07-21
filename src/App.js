import './style.scss'
import { createElement,Fragment } from "react"


function Button(props) {
  return <button>{props.text}</button>
}   
function App() {

  const todos = ['todo1', 'todo2', 'todo3']
  
  const h1 = createElement('h1', null, 'prototurk.com')
  const ul = createElement('ul',null, todos.map(todo => createElement('li',null,todo)))
  const button = createElement(Button, {
    text: 'Buton texti'
  }, null)
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul,null )

  const searchFunction = () => {
    alert("test")
  }
  return (
    <>
    <Button text="merhaba" />
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
