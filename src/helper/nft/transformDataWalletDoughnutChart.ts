import { DataDoughnutChart } from './transformDataDoughnutChart'

type Props = {
  totalWallet: number
  totalStaking: number
  totalPending: number
}

export const transformDataWalletDoughnutChart = ({
  totalWallet,
  totalStaking,
  totalPending,
}: Props) => {
  const data: any[] = []
  
  data.push({
    value: totalWallet,
    id: 'Wallet',
    label: 'Wallet',
    // color: 'hsl(344, 70%, 50%)',
  })
  data.push({
    value: totalStaking,
    id: 'Staking',
    label: 'Staking',
    // color: 'hsl(344, 70%, 50%)',
  })
  data.push({
    value: totalPending,
    id: 'Pending',
    label: 'Pending',
    // color: 'hsl(344, 70%, 50%)',
  })

  const total = Number(
    (totalWallet + totalStaking + totalPending).toFixed(2)
  )

  return { data, total } as DataDoughnutChart
}
