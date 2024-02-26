import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { LectorInfo } from '@/components/AccordionList/ui/LectorInfo'

const AccordionList = () => {
  return (
    <Accordion type='single' collapsible className='w-full text-xl leading-6'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Деталі</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Лектори</AccordionTrigger>
        <AccordionContent>
          <LectorInfo />
          <LectorInfo />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Кому підійде</AccordionTrigger>
        <AccordionContent>
          Цей вебінар буде корисним для дизайнерів, розробників програмного забезпечення, продуктових
          менеджерів та всіх, хто цікавиться покращенням користувацьких інтерфейсів.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { AccordionList }
