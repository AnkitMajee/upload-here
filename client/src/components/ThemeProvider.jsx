import React from 'react'
import { useSelector } from 'react-redux'

export default function ThemeProvider() {
    const { theme } = useSelector((state) => state.theme)
  return (
    <div className={theme}>
        <div className='bg-white text-gray-800 dark:text-grey-200 dark:bg-[rgb(16,23,42)]'>

        </div>
    </div>
  )
}
