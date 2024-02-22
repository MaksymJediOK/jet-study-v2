import { CourseCard } from '@/components/CourseCard'

export default function Similar() {
  return (
    <div className='container mt-36'>
      <h3 className='mb-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
        Інші події у категорії Дизайн
      </h3>
      <div className='flex gap-6'>
        {[1, 2, 3, 4].map((item) => (
          <CourseCard key={item} />
        ))}
      </div>
    </div>
  )
}
