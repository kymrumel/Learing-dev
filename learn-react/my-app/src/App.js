import Home from "./Home";
import Navbar from "./Navbar";

function App() {
     let title = "Welcome to the dojo";

     return (
          <div className='App'>
               <Navbar />
               <div className='greet'>
                    <h1>{title}</h1>
               </div>
               <div className='content'>
                    <Home />
               </div>
          </div>
     );
}

export default App;
