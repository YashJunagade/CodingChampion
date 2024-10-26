import React from 'react'

export const RoadPath = ({ positions }) => {
  const getRoadPath = (positions) => {
    if (positions.length < 2) return ''

    let path = `M ${positions[0].x} ${positions[0].y}`

    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1]
      const curr = positions[i]

      // changed cureve control points:
      const controlPoint1X = prev.x
      const controlPoint1Y = (prev.y + curr.y) / 2 // using midpoint logic
      const controlPoint2X = curr.x
      const controlPoint2Y = (prev.y + curr.y) / 2

      // final path:
      path += ` C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${curr.x} ${curr.y}`
    }

    return path
  }

  return (
    <div className="absolute inset-0">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* shadow of road  */}
        <path
          d={getRoadPath(positions)}
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="opacity-10 md:stroke-[3]" // increase this for md +
          transform="translate(0, 0.5)"
        />

        {/* main road  */}
        <path
          d={getRoadPath(positions)}
          stroke="#374151"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="md:stroke-[3]"
        />

        {/* road middle white markings */}
        <path
          d={getRoadPath(positions)}
          stroke="white"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 8"
          fill="none"
          className="opacity-60 md:stroke-[0.6]"
        />
      </svg>
    </div>
  )
}

export default RoadPath
