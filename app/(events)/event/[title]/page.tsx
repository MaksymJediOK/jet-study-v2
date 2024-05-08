import { fetchData } from '@/lib/fetchData'
import { ExtendedEvent } from '@/types/event'
import { BreadCrumbs, ContactUsButton, LectorCard, BuyCard } from './_components'
import { cn } from '@/lib/utils'
import { eUK } from '@/app/_font/eUK'

export default async function DynamicEvent({ params }: { params: { title: string } }) {
  const detailedEvent = await fetchData<ExtendedEvent>({ url: `/event/${params.title}` })
  console.log(detailedEvent)
  return (
    <>
      <div className='text-sm leading-[14px] text-[#212121]'>
        <BreadCrumbs eventTitle={params.title} />
        <div className='mt-8'>
          <section className='flex gap-16'>
            <div className='max-w-[690px]'>
              <div className='flex items-center gap-2'>
                <span>Дизайн</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='3'
                  height='4'
                  viewBox='0 0 3 4'
                  fill='none'
                >
                  <circle opacity='0.7' cx='1.5' cy='2' r='1.5' fill='#212121' />
                </svg>
                <span>{detailedEvent.eventType}</span>
              </div>
              <img
                className='my-8 h-[392px] w-[690px] rounded-lg'
                src='https://s3-alpha-sig.figma.com/img/36ba/a6b4/fc5c7b4bf4dd03e243422d9450d0798b?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJh-enMgHGqG1Te4KuiOYQspPB7HFmINHb8pFEWdU0hPOo1XfiW3ejzPG4iOnp1wQrSqFiQT3kH7Q5YYYZ7z~vDH41WJOePuUjUdigMBMdK4~Si-MY1yjB~NuOcRvhvExFrG3Gn12abPwRQ9PkWF7w8ONuiQ8xomk37u~NrDqtacVeXDEwhZ7nPzChgSl0TsPUrY-aDVALtbafhZOlrgOBFCmo1l8~oWqTFEV~754dtg1Zwz5NcAqj231Uxt8GhII9yEFB6hZitnRXFwMV1-glQeCpd5vO2nxbVrO2p1DXZaihYAeBEwkkElGNA9aCjHM2etWmrJzYIDf77OuHe6xQ__'
                alt='event image'
              />
              <h1 className={cn('text-[32px] leading-[32px]', eUK.className)}>{detailedEvent.title}</h1>
              <p className='mt-4 text-base leading-7'>{detailedEvent.shortDescription}</p>
              <h2 className={cn('mb-4 mt-8 text-2xl leading-6', eUK.className)}>Чого очікувати</h2>
              <p className='text-base leading-7'>
                {detailedEvent.longDescription}
                <br />
                Програма вебінару: <br />
                1. Вступ до евристик Якоба Нільсона <br />
                2. Принципи евристик Якоба Нільсона <br />
                3. Застосування евристик в реальному дизайні <br />
                4. Вправа: аналіз і покращення інтерфейсу <br />
                5. Питання і відповіді <br />
                Ще якась інформація правова або побажання.
              </p>
              <h2 className={cn('mb-3 mt-8 text-2xl leading-6', eUK.className)}>Лектори</h2>
              <div className='flex flex-col gap-4'>
                {detailedEvent.lecturers.map((lector) => (
                  <LectorCard lectorName={lector.fullName} key={lector.id} />
                ))}
              </div>
              <h2 className={cn('mb-4 mt-8 text-2xl leading-6', eUK.className)}>Кому підійде</h2>
              <p className='mt-3 text-base leading-7'>
                Цей вебінар буде корисним для дизайнерів, розробників програмного забезпечення,
                продуктових менеджерів та всіх, хто цікавиться покращенням користувацьких інтерфейсів.
              </p>
              <ContactUsButton />
            </div>
            <BuyCard
              title={detailedEvent.title}
              location={detailedEvent.location}
              price={detailedEvent.price}
              startDate={detailedEvent.startDate}
            />
          </section>
        </div>
      </div>
    </>
  )
}
