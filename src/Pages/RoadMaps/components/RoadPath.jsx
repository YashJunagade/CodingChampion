const RoadPath = ({ positions }) => {
  const getRoadPath = (positions) => {
    if (positions.length < 2) return ''

    let path = ''
    for (let i = 0; i < positions.length - 1; i++) {
      const current = positions[i]
      const next = positions[i + 1]

      if (i === 0) {
        path += `M ${current.x} ${current.y}`
      }

      path += ` L ${next.x} ${current.y}`

      if (current.y !== next.y) {
        path += ` L ${next.x} ${next.y}`
      }
    }

    return path
  }

  const roadPath = getRoadPath(positions)

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={roadPath}
        stroke="#666666"
        strokeWidth="6"
        strokeLinecap="butt"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d={roadPath}
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="round"
        strokeDasharray="2 3"
        fill="none"
      />
    </svg>
  )
}

export default RoadPath
