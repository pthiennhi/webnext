import React from 'react'

type Props = {}

const DeviceIcon = (props: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
        fill: "rgba(0, 0, 0, 1)"
    }}><path d="M20 3H7c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2h8c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM6 9h4l-.003 9H4V9h2zm6 8V9c0-1.103-.897-2-2-2H7V5h11v12h-6z"></path></svg>

  )
}

export default DeviceIcon