import useCarousel from 'embla-carousel-react'
import type { Event } from '~/types'
import './eventCarousel.css'
// https://www.embla-carousel.com/get-started/react/

type Props = {
  events: Event[]
}

export default function EventCarousel({ events }: Props) {
  const [carouselRef] = useCarousel()
  return (
    <div className='embla' ref={carouselRef}>
      <div className='embla__container'>
        {events.map((event) => (
          <div key={event.id} className='embla__slide'>
            {event.description}
          </div>
        ))}
      </div>
    </div>
  )
}
