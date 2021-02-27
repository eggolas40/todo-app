import { Wrapper } from './App.style'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  return (
    <Wrapper>
      <Header />
      <TodoList />
    </Wrapper>
  );
}

export default App;
