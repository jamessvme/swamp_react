
import sampleData from '../sampleData'
import Feature from './Feature';
import CateGory from './CateGory';
import Footer from './Footer';

export default function ProductList({dispatch, faverates}) {

  return (
    <main className='opacity-[0.87] h-[92vh] overflow-y-auto'>
        <div className=' w-[1200px] mx-auto'>
          <Feature 
            featureData={sampleData.featureData}
          />
          {sampleData.categories.map(category =>
            <CateGory 
              key={category.header}
              category={category}
              dispatch={dispatch}
              faverates={faverates}
            />  
          )}
          <Footer  />
        </div>
      </main> 
  )
}