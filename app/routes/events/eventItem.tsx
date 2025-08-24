import { Link } from 'react-router'
import type { Event } from '~/types'
import './eventItem.css'

export default function EventItem({ event }: { event: Event }) {
  return (
    <li className='event-item'>
      <Link to={event.id}>
        <h2>{event.title}</h2>
        <h4>{event.owner}</h4>
        <h4>{event.datetime.toLocaleString()}</h4>
        <div className='description'>{event.description}</div>
      </Link>
    </li>
  )
}
