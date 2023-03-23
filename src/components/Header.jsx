import { MenuBook } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";

const Header = () => {

  return(
    <header className="w-full flex">
        <div className='w-1/2 justify-center py-3 flex border-b'>
            <MenuBook
              fontSize="large"
            />
        </div>
        <div className='w-1/2 justify-center py-3 flex '>
          <Favorite
            fontSize="large"
            />
        </div>
      </header>
  )
}
export default Header;