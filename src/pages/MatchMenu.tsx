import React from 'react'
import { useParams } from 'react-router-dom'

export default function MatchMenu() {
  const params = useParams<{ lobbyId: string }>()
  return (
    <div>MatchMenu
      {params.lobbyId}
    </div>
  )
}
