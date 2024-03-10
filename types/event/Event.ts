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
