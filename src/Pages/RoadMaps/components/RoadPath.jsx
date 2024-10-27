import React from 'react'

export const RoadPath = ({ positions }) => {
  const getRoadPath = (positions) => {
    if (positions.length < 2) return ''

    let path = `M ${positions[0].x} ${positions[0].y}`

    for (let i = 1; i < positions.length; i++) {
      const prev = positions[i - 1]
      const curr = positions[i]

      // Calculate midpoint Y for smooth vertical transitions
      const midY = (prev.y + curr.y) / 2

      // Calculate the horizontal distance for control point adjustment
      const horizontalDist = Math.abs(curr.x - prev.x)

      // Adjust control points based on direction of curve
      const isRightToLeft = curr.x < prev.x
      const isSteepCurve = Math.abs(curr.y - prev.y) > 20 // Threshold for steep curves

      // Dynamic control point positioning
      let controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y

      if (isSteepCurve) {
        const extensionFactor = 0.25 // smoothness of curve.
        controlPoint1X = prev.x
        controlPoint1Y = prev.y + (curr.y - prev.y) * extensionFactor
        controlPoint2X = curr.x
        controlPoint2Y = prev.y + (curr.y - prev.y) * (1 - extensionFactor)
      } else {
        const curveOffset = horizontalDist * 0.001 // this value will adjust curvature of road near the buttons.
        controlPoint1X = isRightToLeft
          ? prev.x - curveOffset
          : prev.x + curveOffset
        controlPoint1Y = midY
        controlPoint2X = isRightToLeft
          ? curr.x + curveOffset
          : curr.x - curveOffset
        controlPoint2Y = midY
      }

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
        strokeLinecap="square"
      >
        {/* shadow of road */}
        <path
          d={getRoadPath(positions)}
          stroke="#000000"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          fill="none"
          className="opacity-10 md:stroke-[2.5]"
          transform="translate(0, 0.5)"
        />

        {/* main road */}
        <path
          d={getRoadPath(positions)}
          stroke="#374151"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          className="md:stroke-[2.75]"
        />

        {/* road middle white markings */}
        <path
          d={getRoadPath(positions)}
          stroke="white"
          strokeWidth="0.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1.5 5"
          fill="none"
          className="opacity-60 md:stroke-[0.5]"
        />
      </svg>
    </div>
  )
}

export default RoadPath
