import {
  doc,
  getDoc,
  getDocs,
  collection,
} from 'firebase/firestore'
import { db } from '~/firebase'
import type { Event, FSEvent } from '~/types'

async function getAllEvents() {
  const querySnapshot = await getDocs(collection(db, 'events'))
  const events = [] as Array<Event>
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const data = doc.data() as FSEvent
    events.push({...data, id, datetime: data.datetime.toDate()})
  })
  return events
}

async function getEvent(id:string) {
  const docRef = doc(db, 'events', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data() as FSEvent
    return {...data, datetime: data.datetime.toDate()} as Event
  }
}

export {getAllEvents, getEvent}