import { useState } from 'react';
import { useImmerReducer } from 'use-immer';




import Header from './components/Header';

import ProductList from './components/ProdctList';
import FaveritesList from './components/FaveritesList';

const reducer = (faverates, action) => {
  switch(action.type) {
    case "ADD": return void faverates.push(action.item);
    case "DELETE": return faverates.filter(item => item.title !== action.item.title);
  }
}

function App() {
  
  const [faverates, dispatch] = useImmerReducer(reducer, []);
  const [tab, setTab] = useState(true);

  return (
    <>
      <Header 
       faverates={faverates}
       setTab={setTab}
       tab={tab}
      />
      {tab ? 
        <ProductList 
          dispatch={dispatch}
          faverates={faverates}
        />
      :
      <FaveritesList 
        faverates={faverates}
        dispatch={dispatch}
      />
    }
  
    </>
  );
}

export default App;
