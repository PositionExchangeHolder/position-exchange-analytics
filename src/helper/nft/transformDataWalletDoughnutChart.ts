export const fakeDataDoughnutChart = {
  labels: ['Wallet', 'Staking', 'Pending'],
  datasets: [
    {
      data: [44468, 39524, 13509],
      backgroundColor: [
        'rgba(57, 70, 238, 0.4)',
        'rgba(251, 173, 55, 0.4)',
        'rgba(171, 5, 242, 0.4)',
      ],
      borderColor: [
        'rgba(57, 70, 238, 0.2)',
        'rgba(251, 173, 55, 1)',
        'rgba(171, 5, 2422, 0.2)',
      ],
      borderWidth: 2,
      hoverOffset: 20,
    },
  ],
}

export const transformDataWalletDoughnutChart = (data: number[]) => {
  const dataDoughnutChart = {
    labels: ['Wallet', 'Staking', 'Pending'],
    datasets: [
      {
        data,
        backgroundColor: [
          'rgba(57, 70, 238, 0.4)',
          'rgba(251, 173, 55, 0.4)',
          'rgba(171, 5, 242, 0.4)',
        ],
        borderColor: [
          'rgba(57, 70, 238, 0.2)',
          'rgba(251, 173, 55, 1)',
          'rgba(171, 5, 2422, 0.2)',
        ],
        borderWidth: 2,
        hoverOffset: 20,
      },
    ],
  }
  return dataDoughnutChart
}
