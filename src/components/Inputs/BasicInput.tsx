import React from 'react'

export default function BasicInput({ typeInput, inputName }: { typeInput: string, inputName: string }) {
  return (
    <input type={typeInput} placeholder={inputName} />
  )
}
