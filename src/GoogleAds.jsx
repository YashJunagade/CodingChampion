import React, { useState, useEffect } from 'react'

const GoogleAds = ({
  adSlot,
  adClient = 'ca-pub-1487916517080617',
  baseWidth = 728,
  baseHeight = 90,
  className = '',
  style = {},
}) => {
  const [adSize, setAdSize] = useState({
    width: baseWidth,
    height: baseHeight,
  })

  useEffect(() => {
    const calculateResponsiveSize = () => {
      const screenWidth = window.innerWidth
      let newWidth, newHeight

      // Responsive scaling logic
      if (screenWidth < 576) {
        // Mobile
        newWidth = Math.min(screenWidth * 0.9, baseWidth * 0.4)
        newHeight = (newWidth / baseWidth) * baseHeight
      } else if (screenWidth >= 576 && screenWidth < 992) {
        // Tablet
        newWidth = Math.min(screenWidth * 0.8, baseWidth * 0.7)
        newHeight = (newWidth / baseWidth) * baseHeight
      } else {
        // Desktop
        newWidth = Math.min(screenWidth * 0.7, baseWidth)
        newHeight = baseHeight
      }

      // Ensure minimum and maximum constraints
      newWidth = Math.max(300, Math.min(newWidth, baseWidth))
      newHeight = Math.max(50, (newWidth / baseWidth) * baseHeight)

      setAdSize({
        width: Math.round(newWidth),
        height: Math.round(newHeight),
      })
    }

    // Initial calculation
    calculateResponsiveSize()

    // Add resize listener
    window.addEventListener('resize', calculateResponsiveSize)

    // Cleanup
    return () => window.removeEventListener('resize', calculateResponsiveSize)
  }, [baseWidth, baseHeight])

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error('AdSense loading error:', error)
    }
  }, [adSize])

  return (
    <div
      className={`responsive-adsense ${className} `}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        ...style,
      }}
    >
      <ins
        className="adsbygoogle border-2 border-black"
        style={{
          display: 'inline-block',
          width: `${adSize.width}px`,
          height: `${adSize.height}px`,
          maxWidth: '100%',
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default GoogleAds
