import Post from "./Post";
import Nav from "./Nav";

const App = () => {
  
  const username = localStorage.getItem('username')
  const returnMessage = username ? 'Hello ' + username : 'Stranger\'s Things'
  return (
    <div>
      <div id="MainTitle">
        <p>{ returnMessage }</p>
      </div>
      <Nav />
      <Post />
    </div>
  );
}

export default App;