
import { useRouter } from 'next/router'

import { Button } from 'components'
import { ChevronLeftIcon, ChevronRightIcon } from 'icons'

export type SliderProps = {
  slides: string[]
}

export const Slider: React.FC<SliderProps> = ({ slides }) => {
  const { asPath, push } = useRouter()
  let actualSlide: number = Number(asPath.split('-')[2]) || 1
  const nextSlide = slides.length <= 1 ? actualSlide : actualSlide >= slides.length ? 1 : actualSlide + 1
  const prevSlide = slides.length <= 1 ? actualSlide : actualSlide <= 1 ? slides.length : actualSlide - 1

  const changeSlide = async (slideNumber: number): Promise<void> => {
    await push(`#main-slide-${slideNumber}`)
    actualSlide = slideNumber
  }

  return (
    <div className="w-full h-full flex overflow-hidden relative bottom-0 justify-center items-center">
      <div className="w-full h-96 m-5 text-center relative">
        <div className='absolute left-3 top-2/4 translate-y-2/4s z-20 rounded-3xl overflow-hidden'>
          <Button border={false} variant='primary' onClick={async () => await changeSlide(prevSlide)} icon={<ChevronLeftIcon />}></Button>
        </div>
        <div className='absolute right-3 top-2/4 translate-y-2/4 z-20 rounded-3xl overflow-hidden'>
          <Button border={false} variant='primary' onClick={async () => await changeSlide(nextSlide)} icon={<ChevronRightIcon />}></Button>
        </div>
        <div className="overflow-x-hidden scroll-smooth snap-mandatory snap-x flex items-center relative overflow-y-hidden">
          {slides.map((slideUrl, index) => (
            <div key={`slider-item-${index}`} id={`main-slide-${index + 1}`} className="box-border w-full h-96 relative snap-center mr-0 origin-center scale-100 flex justify-center items-center shrink-0">
              <div className='mt-44 bg-blue-500 w-full h-full flex justify-center items-center'>
                <div style={{ backgroundImage: `url(${slideUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='w-full h-full' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <div className="absolute gap-4 bottom-0 left-0 w-full h-10 flex justify-center items-center">
        {slides.map((slide, index) => (
          <div key={`slide-dots-${index}`} onClick={async () => await changeSlide(index + 1)} className={`${index + 1 === actualSlide ? 'bg-pink-600' : 'bg-gray-700'} cursor-pointer w-4 h-4 rounded-lg`}></div>
        ))}
      </div>
      </div>
    </div>
  )
}
