import LayOut from "../Layout/LayOut"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCoinData } from "../Redux/Slice/CoinSlice"
import { useEffect } from "react"
function ShowCoin() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function getData() {
        const data = await dispatch(getCoinData())
        console.log(data)
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <LayOut>
            <div className=' min-h-[90vh]'>
                <div className='flex items-center justify-center relative top-20 py-2'>
                    <input
                        type="text"
                        className=' w-[50%] text-xl px-5 h-14 rounded-xl bg-transparent border'
                        placeholder='Search'
                    />
                </div>
                <div className='  flex items-center justify-center gap-24 flex-wrap px-20 absolute top-24 flex-col mt-20'>
                    <div className=' card h-72 w-72 shadow-[0_0_10px_black] hover:shadow-[0_2px_7px_seagreen] cursor-pointer transition-all ease-in-out duration-300'>
                        <div>
                        </div>
                    </div>
                </div>

            </div>
        </LayOut>
    )
}

export default ShowCoin
