import { useAppSelector } from 'store/hooks'
import { selectPrice } from 'store/price/priceSlice'

export default function Home() {
  //dashboard page
  const { prices } = useAppSelector(selectPrice)
  console.log('prices', prices)

  return (
    <div className=" dark:bg-primary bg-light-primary w-full h-full  "></div>
  )
}
