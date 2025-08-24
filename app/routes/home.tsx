import EventCarousel from '~/components/eventCarousel'
import { getAllEvents } from '~/api/events'
import type { Route } from './+types/home'
import GamInfo from '~/components/gamInfo'
import './home.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ]
}

export async function loader({ params }: Route.LoaderArgs) {
  const events = await getAllEvents()
  return { events }
}

export default function Home({loaderData: {events}}:Route.ComponentProps) {
  return (
    <>
      <GamInfo />
      <EventCarousel events={events} />
    </>
  )
}
