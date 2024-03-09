import { ProfileForm } from '@/components/ProfileForm'

export default function ProfilePage() {
  return (
    <div>
      <h3 className='text-2xl font-semibold tracking-tighter'>Особисті дані</h3>
      <div className='flex gap-6'>
        <div className='w-[282px]'>
          <p className='text-base leading-7'>
            Вносьте реальні дані, тому що вони будуть відображені у сертифікаті та використані для
            підтвердження покупок
          </p>
        </div>
        <div className='mt-1'>
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}
