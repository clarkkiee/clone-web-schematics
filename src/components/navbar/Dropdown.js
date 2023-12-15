import { Menu } from '@headlessui/react'

function Dropdown() {
  return (
    <Menu>
      <Menu.Button className='flex group gap-4 text-white items-center '>
        <h3 className='text-white group font-semibold text-lg py-2'>Events</h3>
        <svg className='group-focus:rotate-180 group-focus:transition-all mt-[2px]' xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
        </svg>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              <p className='text-slate-300 text-sm p-2 font-semibold'>Schematics <span className='text-rose-500'>NPC</span></p>
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              <p className='text-slate-300 text-sm p-2 font-semibold'>Schematics <span className='text-yellow-400'>NLC</span></p>
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              <p className='text-slate-300 text-sm p-2 font-semibold'>Schematics <span className='text-green-500'>BST</span></p>
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              <p className='text-slate-300 text-sm p-2 font-semibold'>Schematics <span className='text-sky-400'>REEVA</span></p>
            </a>
          )}
        </Menu.Item>
       
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown