import React, {useState} from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Gallery from './components/Gallery'
import ContactForm from './components/Contact'

function App() {
const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial projects'},
    {name: 'portraits', description: 'Portraits of people in my life'},
    {name: 'food', description: 'Fields, farmhouse, waterfalls, and the beauty of nature'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
      <main>
      {/* shorthand for <React.Fragment></React.Fragment> */}
      {!contactSelected ? (        
        <> 
        {/* invoke components */}
      <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>   
        </>
      ) : (
      <ContactForm></ContactForm>
      )}      
      </main>
    </div>
  );
}

export default App;
