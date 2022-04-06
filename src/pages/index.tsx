import { useAppSelector } from 'store/hooks'
import { selectPrice } from 'store/price/priceSlice'

export default function Home() {
  //dashboard page
  const { prices } = useAppSelector(selectPrice)
  console.log('prices', prices)

  return <div className=" bg-primary h-screen w-screen  "></div>
}
