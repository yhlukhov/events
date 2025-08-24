import { Form } from 'react-router'
import type { Route } from './+types/newEvent'
import {} from '~/api/events'
import './newEvent.css'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Add New Event' },
    { name: 'description', content: 'Oneness events - Add' },
  ]
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData()
  let title = formData.get('title') || ''
  return {title}
}

export default function NewEvent({ actionData }: Route.ComponentProps) {

  return (
    <>
      <h1>Add new event</h1>
      <Form method='post' className='add-form'>
        <input
          type='text'
          name='title'
          className='input-box title'
          placeholder='Event title'
          required
        />
        <input
          type='text'
          name='organizer'
          className='input-box organizer'
          placeholder='Organizer'
        />
        <input
          type='datetime-local'
          name='datetime'
          defaultValue={new Date().toISOString().slice(0, 16)}
          className='input-box datetime'
          step={60}
          required
        />
        <textarea
          name='description'
          className='input-box description'
          placeholder='Description'
          maxLength={200}
        ></textarea>
        
        <button type='submit'>Submit</button>
      </Form>
    </>
  )
}

