import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const baseHeight = 4775;
  const mainHeight = 9775;
  const [current, setCurrent] = useState<number>(0);
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  const scrollLimit = baseHeight - pageHeight;

  const lenis = useLenis(({ scroll }) => {
    setCurrent(scroll + pageHeight * scroll / scrollLimit);
    console.log("scroll:", scroll, pageHeight);
  });


  useEffect(() => {
    const handleResize = () => {
      setPageHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className={`h-[4775px] relative overflow-hidden`}>
        <div className={`h-[9775px] overflow-y-scroll no-scrollbar`}>
          <div className="fixed w-full bg-[#e5ca6a]">
            <div className="w-full h-3 bg-black relative">
              <div className="bg-[#C86148] absolute left-0 top-0 h-full z-10 transition-all duration-0" style={{ width: `${current / baseHeight * 100}%` }}>
              </div>
            </div>
            <div>
              <div className='container flex flex-col lg:flex-row gap-8 mx-auto pt-8 lg:pb-0 h-[calc(100lvh-0.75rem)] justify-between items-center relative'>

                {current / scrollLimit < 1 / 2 ?
                  <div className='relative flex flex-col gap-4 container lg:w-3/5 shrink-0 mt-12 lg:mt-0 w-full items-center lg:items-start max-w-[600px] h-1/2 lg:h-auto animate-fade'>
                    <p className='uppercase font-secondary text-[18px] lg:text-[24px]'>A world of respect and rackets</p>
                    <img
                      alt="Teddies"
                      loading="lazy"
                      width="130"
                      height="130"
                      decoding="async"
                      data-nimg="1"
                      className="right-0 absolute top-0 translate-x-2 lg:translate-x-[25%] translate-y-2 lg:translate-y-0 max-w-[60px] lg:max-w-[100px]"
                      src="/assests/icons/hat-45.svg">
                    </img>
                    <p className='uppercase font-primary text-center lg:text-left text-[50px] lg:text-[98px] tracking-tighter leading-none'>meet today montana</p>
                    <p className='font-semibold font-secondary text-[18px] lg:text-[24px] text-center lg:text-left mb-6 leading-none'>A new arrival to Plushtown, he came to the city on his endless pursuit of $SUGAR. His journey is your adventure—full of challenges and opportunities to carve out a legendary legacy.</p>
                  </div> : <></>
                }
                {
                  current / scrollLimit >= 1 / 2 ?
                    <div className='relative flex flex-col gap-4 container lg:w-3/5 shrink-0 mt-12 lg:mt-0 w-full items-center lg:items-start max-w-[600px] h-1/2 lg:h-auto animate-fade'>
                      <p className='uppercase font-secondary text-[18px] lg:text-[24px]'>A world of respect and rackets</p>
                      <img
                        alt="Teddies"
                        loading="lazy"
                        width="130"
                        height="130"
                        decoding="async"
                        data-nimg="1"
                        className="right-0 absolute top-0 -translate-x-32 lg:-translate-x-[25%] translate-y-4 lg:translate-y-0 max-w-[60px] lg:max-w-[100px]"
                        src="/assests/icons/hat-45.svg"
                      />
                      <p className='uppercase font-primary text-center lg:text-left text-[50px] lg:text-[98px] tracking-tighter leading-none'>our vision</p>
                      <p className='font-semibold font-secondary text-[18px] lg:text-[24px] text-center lg:text-left mb-6 leading-none'>We're all about crafting an immersive universe, where storytelling and community come together, transforming every experience into a memorable adventure.</p>
                      <div
                        className="bg-[#7B6B95] border-[#584A6F] drop-shadow-[2px_2px_0_#312734] lg:drop-shadow-[3px_3px_0_#312734] w-full flex flex-col gap-2 rounded-[20px] px-6 py-4 uppercase font-black border-[5px] relative max-w-[420px]">
                        <h3 className="text-left title leading-none lg:leading-[68px] text-[28px] lg:text-[32px] text-[#584A6F] select-none">
                          <p className="font-primary text-xl tracking-tighter">Built on<br />Solana</p>
                          <img
                            alt="Teddies"
                            loading="lazy"
                            width="150"
                            height="125"
                            decoding="async"
                            data-nimg="1"
                            className="max-w-[105px] lg:max-w-full absolute right-4 bottom-0 pointer-events-none text-transparent"
                            src="/assests/icons/sol-coin.webp"
                          />
                        </h3>
                      </div>
                    </div> : <></>
                }
                <img
                  src={`assests/teddy/teddy (${Math.floor(current / baseHeight * 190) + 1}).webp`}
                  alt='Teddy'
                  className='w-full max-w-[400px] sm:max-w-[500px] lg:w-2/5 lg:max-w-[600px] h-1/2 lg:h-full container mx-auto pointer-events-none select-none aspect-square relative z-[5] object-contain object-bottom mt-[-40px] sm:mt-0'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis >
  )
}

export default App;