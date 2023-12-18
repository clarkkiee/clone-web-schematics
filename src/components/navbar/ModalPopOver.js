import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function ModalPopOver() {
  return (
    <Popover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>  
            <div className='text-white flex'>
                <Popover.Button>
                  Events
                </Popover.Button>
                <ChevronDownIcon width={24} className={open ? 'rotate-180 transform' : ''}/>
            </div>
            <div className='absolute right-24 top-[80%] w-[50%]'>
              <Popover.Panel>
                <div className='grid gap-2 grid-cols-2 p-6 bg-white rounded-lg'>
                  <a href='/' className='flex items-center p-4 rounded-lg hover:bg-slate-50'>
                    <div className='flex flex-col gap-2 w-max'>
                        <h3 className='font-semibold text-sm'>Schematics <span className='text-rose-500'>NPC</span></h3>
                        <p className='text-slate-400'>Step up and unleash your potential through our programming contest!</p>
                    </div>
                  </a>
                  <a href='/' className='flex items-center p-4 rounded-lg hover:bg-slate-50'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-sm'>Schematics <span className='text-yellow-300'>NLC</span></h3>
                        <p className='text-slate-400 w-[80%]'>So you think you can solve our logic games?</p>
                    </div>
                  </a>
                  <a href='/' className='flex items-center p-4 rounded-lg hover:bg-slate-50'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-sm'>Schematics <span className='text-green-500'>BST</span></h3>
                        <p className='text-slate-400 w-[80%]'>Experience a Journey of Transformative Learning With Us!</p>
                    </div>
                  </a>
                  <a href='/' className='flex items-center p-4 rounded-lg hover:bg-slate-50'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-semibold text-sm'>Schematics <span className='text-sky-400'>REEVA</span></h3>
                        <p className='text-slate-400 w-[80%]'>Sync your beats, Immerse the Innovation</p>
                    </div>
                  </a>
                </div>
              </Popover.Panel>
            </div>
        </>
      )}
    </Popover>
  )
}

export default ModalPopOver