
import sampleData  from './sampleData';

import Header from './components/Header';
import Feature from './components/Feature';

function App() {

  return (
    <div className="container mx-auto">
      <Header />
      <main className='bg-[]'>
        <Feature 
          featureData={sampleData.featureData}
        />

      </main>
    </div>
  );
}

export default App;
