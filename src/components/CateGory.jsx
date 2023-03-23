import { Favorite } from "@mui/icons-material";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { type } from "@testing-library/user-event/dist/type";

export default function CateGory({category, dispatch, faverates}) {

  const handleAdd = (item) => {
    dispatch({type: "ADD", item})
  }
  return (
    <div>
      <h1 className="opacity-[0.87] text-[20px] font-bold mt-5">{category.header}</h1>
      <p className="opacity-[0.54] text-[0.875rem] leading-[1.43]">{category.sub}</p>
      <div className="grid grid-cols-2 gap-x-40  border-b pb-10">
        {category.items.map(item => 
          <div className="flex justify-between mt-5" key={item.title}>
            <div className="flex gap-5">
              <div className="mt-2">
                <img src="./assets/imgs/room.jpg" width={70} alt="room" />
              </div>
              <div>
                <p className="font-bold text-[0.875rem] text-black">{item.title}</p>
                <span className="text-[0.875rem] opacity-[0.54] block">{item.price}</span>
                <span className="text-[0.875rem] opacity-[0.54]">{item.price_desc}</span>
              </div>
            </div>
            <div 
              className="p-5 hover:bg-red-50 rounded-[36px]"
             
              >
               {faverates.length === 0 || faverates.filter(tmp => tmp.title === item.title).length === 0 ?
                <FavoriteBorderSharpIcon
                fontSize="large"
                onClick={() => handleAdd(item)}
                className="opacity-[0.54] cursor-pointer"
                /> :
              <Favorite
                fontSize="large"
                onClick={() => dispatch({type: "DELETE", item})}
                className="text-red-500 bg-dark-400 cursor-pointer"
                />
              } 
              
            </div>
          </div>   
        )}
      </div>
    </div>
  )
}