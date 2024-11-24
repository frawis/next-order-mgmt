'use client';

import { useTheme } from 'next-themes';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Desktop, MoonStars, Sun } from '@phosphor-icons/react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Menu>
      <MenuButton className="rounded shadow-inner">
        {theme === 'dark' ? (
          <Sun weight="duotone" className="text-warning" size={20} />
        ) : (
          <MoonStars className="text-primary" size={20} />
        )}
      </MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-10 bg-background origin-top-right rounded-md border border-shade p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button
            onClick={() => setTheme('dark')}
            className="size-8 inline-flex items-center justify-center rounded hover:bg-white/10"
          >
            <MoonStars
              weight="duotone"
              size={20}
              className="text-primary-dark"
            />
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => setTheme('light')}
            className="size-8 inline-flex items-center justify-center rounded hover:bg-white/10"
          >
            <Sun weight="duotone" size={20} className="text-warning" />
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => setTheme('system')}
            className="size-8 inline-flex items-center justify-center rounded hover:bg-white/10"
          >
            <Desktop weight="duotone" size={20} className="text-shade-dark" />
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
