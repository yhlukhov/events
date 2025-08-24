import { getEvent } from '~/api/events'
import type { Route } from './+types/eventDetails'
import './eventDetails.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Oneness Events' },
    { name: 'description', content: 'Oneness events' },
  ]
}

export async function loader({ params: {id} }: Route.LoaderArgs) {
  const event = await getEvent(id)
  return {event}
}

export default function EventDetails({ loaderData: { event } }: Route.ComponentProps) {
  return event ? (
    <section className='event-details'>
      <h1 className='title'>{event.title}</h1>
      <h3>{event.owner}</h3>
      <h3>{event.datetime.toLocaleString()}</h3>
      <div className='description'>{event.description}</div>
      <div className='details'>{event.details}</div>
    </section>
  ) : (
      <h2>Sorry, there is no information about event you are looking for</h2>
  )
}
