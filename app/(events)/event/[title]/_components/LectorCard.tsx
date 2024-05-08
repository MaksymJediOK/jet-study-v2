import React from 'react'

const LectorCard = ({lectorName}:{lectorName:string}) => {
  return (
    <div className='text-base leading-7'>
      <h3 className='font-medium underline'>{lectorName}</h3>
      <p className='mt-1'>
        Senior-розробник компанії SoftServe з багаторічним досвідом. Працював над такими продуктами як
        Rozetka та Headway.
      </p>
    </div>
  )
}

export { LectorCard }
