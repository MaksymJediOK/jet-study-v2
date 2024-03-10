export type Lector = {
  id: string
  fullName: string
}

export type Event = {
  id: number
  title: string
  thumbnail: string
  imageSrc: string
  startDate: Date
  startTime: string
  creator: Lector
  eventType: string
  eventTypeId: number
  categoryId: number
  lecturers: Lector[]
}

export type ExtendedEvent = {
  id: number
  title: string
  thumbnail: string
  imageSrc: string
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  price: number
  shortDescription: string
  longDescription: string
  targetedAudience: string
  seatsAvailable: number
  location: string
  additionalRecources: string
  isOnline: boolean
  creator: Lector
  eventType: string
  waitingForConfirmation: null | string
  isAllowedToWatchAllContent: null | boolean
  lecturers: Lector[]
}
