import { gql } from '@apollo/client'
import client from '../apollo-client'
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query NextLaunch {
        launchNext {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
        }
      }
    `,
  })
  return {
    props: {
      nextLaunch: data.launchNext,
    },
  }
}
export const APP_VERSION = 'v1.0.0'

function fetchDate(date: any) {
  const newDate = new Date(date)

  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()

  return [day, month, year]
}
export default function Home({ nextLaunch }: any) {
  console.log('nextLaunch', nextLaunch)
  const { mission_name, launch_date_local, launch_site } = nextLaunch
  const nextLaunchDate = fetchDate(launch_date_local).join('/')

  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <span>
        🚀 Mission name: <strong>{mission_name}</strong>
      </span>
      <span className="bg-red-500">
        📅 Date: <strong>{nextLaunchDate}</strong>
      </span>
      <span>
        🏠 Launched from: <strong>{launch_site.site_name_long}</strong>
      </span>
    </div>
  )
}
