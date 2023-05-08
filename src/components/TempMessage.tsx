import React, { useEffect } from 'react'
import { useGlobalContext } from '../store'

export default function TempMessage() {
  // falta pôr uma animação

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
    }, 5000)

    return () => {
      clearTimeout(removeTempMessage)
    }
  }, [])

  return (
    <div
      className={`alert alert-${
        tempMessage.type && alertType.includes(tempMessage.type)
          ? tempMessage.type
          : `primary`
      } tempMessage`}
    >
      <p>{tempMessage.message}</p>
    </div>
  )
}
