import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import React from 'react'

export default function ChangeThemes() {
  const { systemTheme, theme, setTheme } = useTheme()
  const renderThemeChanger = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-full h-full text-yellow-500 "
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <MoonIcon
          className="w-full h-full text-gray-700 "
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }

  return renderThemeChanger()
}
