export type Event = {
  id: number
  title: string
  thumbnail: string
  imageSrc: string
  startDate: Date
  startTime: string
  creator: {
    id: string
    fullName: string
  }
  eventType: string
  eventTypeId: number
  categoryId: number
  lecturers: Lector[]
}

export type Lector = {
  id: string
  fullName: string
}
