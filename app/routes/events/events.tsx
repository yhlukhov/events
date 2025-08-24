import type { Route } from './+types/events'
import { getAllEvents } from '~/api/events'
import EventItem from './eventItem'
import './events.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Oneness Events' },
    { name: 'description', content: 'Oneness events' },
  ]
}

export async function loader({ params }: Route.LoaderArgs) {
  const events = await getAllEvents()
  return {events}
}

export default function Events({ loaderData:{events} }: Route.ComponentProps) {
  console.log(events)
  return (
    <ul className='events'>
      {events.map(event => (<EventItem key={event.id} event={event} />))}
      <li className='event-item'>
        <h2 className=''>Header</h2>
        <h4>Organizer</h4>
        <h4>Date:Time</h4>
        <div className='description'>
          Description text Description text Description text Description text
          Description text Description text Description text Description text
          Description text Description text Description text Description text
          Description text Description text Description text Description
          text{' '}
        </div>
      </li>
    </ul>
  )
}
