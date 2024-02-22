import Image from 'next/image'
import { shortText } from '@/lib/utils'

type CardProps = {
  picture: string
  title: string
  moneyType: string
  date: Date
}

const CourseCard = () => {
  return (
    <div className='flex h-[276px] max-w-[282px] flex-col gap-2'>
      <img
        src='https://external-preview.redd.it/mountain-view-3840x2160-v0-fO2EKkqrlIFEPK79_TmiCmvFqtwsP38ZaB6wHL5EX6g.png?width=640&crop=smart&auto=webp&s=325c9e101b50b4ae3b2c9b3ea5bf8b95939034e6'
        alt='img'
        width={282}
        height={176}
        className='rounded-sm'
      />
      <h4 className='scroll-m-20 text-lg font-semibold leading-7 tracking-normal'>
        {shortText(
          'Психологія емоційного інтелекту: розуміння, розвиток та застосування в практиці',
          50,
        )}
      </h4>
      <div className='flex justify-between'>
        <p className='text-[16px] text-muted-foreground'>Безплатно</p>
        <p className='text-[16px] text-muted-foreground'>18.06</p>
      </div>
    </div>
  )
}

export { CourseCard }
