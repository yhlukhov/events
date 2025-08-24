import type { Timestamp } from "firebase/firestore"

type Event = {
  id: string
  title: string
  owner: string
  details: string
  description: string
  datetime: Date
  elevendays: boolean
}

type FSEvent = {
  id: string
  title: string
  owner: string
  details: string
  description: string
  datetime: Timestamp
  elevendays: boolean
}

export type {Event, FSEvent}