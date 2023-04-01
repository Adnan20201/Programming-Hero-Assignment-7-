import './App.css'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import Quotation from './components/Quotation/Quotation';

function App() {

  return (
    <div className="App">
      {/* this is header Section */}
      <Header></Header>

      {/* this is Blog Section */}
      <Blog></Blog>

      {/* this is Quotation section  */}
      <Quotation></Quotation>
    </div>
  )
}

export default App
