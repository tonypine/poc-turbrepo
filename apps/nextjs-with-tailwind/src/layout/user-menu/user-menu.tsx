import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import clsx from 'clsx';

const options = [
  { label: 'Profile', href: '#' },
  { label: 'Account', href: '#' },
  { label: 'Dashboard', href: '#' },
  { label: 'Logout', href: '#' },
];

const UserMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button>
        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-secondary">
          T
        </div>
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95">
      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {options.map((option) => (
            <Menu.Item>
              {({ active }) => (
                <a
                  href={option.href}
                  className={clsx(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}>
                  {option.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default UserMenu;
