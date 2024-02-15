const Footer = () => {
  return (
    <footer className='mt-auto flex gap-[165px] bg-black py-[95px] text-white pl-[13%]'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>JetStudy</h1>
      <div className='grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-5'>
        <h3 className='text-xl tracking-normal'>Події</h3>
        <h3 className='text-xl tracking-normal'>Мої Події</h3>
        <h3 className='text-xl tracking-normal'>Календар</h3>
        <h3 className='text-xl tracking-normal'>Стати інструктором</h3>
        <h3 className='text-xl tracking-normal'>Профіль</h3>
        <h3 className='text-xl tracking-normal'>FAQ</h3>
      </div>
    </footer>
  )
}

export { Footer }
