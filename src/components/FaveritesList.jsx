
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function FaveritesList({faverates, dispatch}) {

  return (
    <main className='w-1/4 p-2 mx-auto'>
        { faverates.length ===0 ?
          <div className='mt-5 p-4 rounded bg-[#E4E6E6]'>
              <ErrorOutlineIcon /> Press ♡ to add your favorites here.
          </div> :
          <div className='mt-10 shadow1 p-4'> 
          {faverates.map(item => 
            <div className="flex justify-between border-b pb-2 mt-5 items-center " key={item.title}>
              <div className="flex gap-5">
                <div>
                  <img src="./assets/imgs/room.jpg" width={70} alt="room" />
                </div>
                <div>
                  <p className="font-bold text-[0.875rem] text-black">{item.title}</p>
                  <span className="text-[0.875rem] opacity-[0.54] block">{item.price}</span>
                </div>
              </div>
              <CloseIcon 
                onClick= {() => dispatch({type: "DELETE", item})}
              />
            </div> 
          )}
          </div>
        }
      </main>
  )
}