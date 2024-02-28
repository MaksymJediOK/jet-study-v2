import localFont from 'next/font/local'

export const eUK = localFont({
  src: [
    {
      path: './fonts/e-UkraineHead-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/e-UkraineHead-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/e-UkraineHead-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})
