import { MenuBook } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

const Header = ({faverates, tab, setTab}) => {
  return(
    <header className="w-full flex mx-auto ">
       <div className="w-[1200px] mx-auto flex ">
          <div 
            onClick={() => setTab(true)}
            className={tab ? 'w-1/2 border-b border-b-2 justify-center px-2 cursor-pointer  border-b-slate-900  py-3 flex  shadow-dark-50' :
                             'w-1/2  justify-center px-2 cursor-pointer  border-b-slate-900  py-3 flex  shadow-dark-50'            
            }
            >
              <MenuBook
                fontSize="large"
              />
          </div>
          <div
            onClick={() => setTab(false)} 
            className={!tab ? 'w-1/2 border-b border-b-2 justify-center px-2 cursor-pointer  border-b-slate-900  py-3 flex  shadow-dark-50' :
                             'w-1/2  justify-center px-2 cursor-pointer  border-b-slate-900  py-3 flex  shadow-dark-50'            
            }>
            <div className="relative">
              <Favorite
                fontSize="large"
                />
              {faverates.length !== 0 &&
                <p className="p-1 block top-1 left-6 absolute border border-white text-white bg-red-500 text-[10px] rounded-[20px]">{faverates.length}</p>
              }
            </div>
          </div>
       </div>
      </header>
  )
}
export default Header;