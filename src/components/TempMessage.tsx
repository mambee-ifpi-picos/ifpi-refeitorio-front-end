import React, { useEffect } from 'react'
import { useGlobalContext } from '../store'

export default function TempMessage() {
  const alertType = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]
  const { tempMessage, setTempMessage } = useGlobalContext()

  useEffect(() => {
    const removeTempMessage = setTimeout(() => {
      setTempMessage({ message: '', type: '' })
    }, 7500)

    return () => {
      clearTimeout(removeTempMessage)
    }
  })

  return (
    <>
      <div
        className={`alert alert-${
          tempMessage.type && alertType.includes(tempMessage.type)
            ? tempMessage.type
            : `primary`
        } tempMessage`}
      >
        <p>{tempMessage.message}</p>
      </div>
    </>
  )
}
