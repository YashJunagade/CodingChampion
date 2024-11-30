import React, { useState, useEffect, useRef } from 'react'

const GoogleAds = ({
  adSlot,
  adClient = 'ca-pub-1487916517080617',
  baseWidth = 728,
  baseHeight = 90,
  className = '',
  style = {},
  uniqueKey = '', // Add a unique identifier
}) => {
  const [adSize, setAdSize] = useState({
    width: baseWidth,
    height: baseHeight,
  })
  const adRef = useRef(null)
  const [isAdLoaded, setIsAdLoaded] = useState(false)

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
    // Ensure we only try to load the ad once
    if (isAdLoaded || !adRef.current) return

    const loadAd = () => {
      try {
        // Check if the ad element exists and hasn't been loaded
        if (adRef.current && !adRef.current.hasChildNodes()) {
          ;(window.adsbygoogle = window.adsbygoogle || []).push({
            // Additional configuration if needed
            google_ad_client: adClient,
            google_ad_slot: adSlot,
          })
          setIsAdLoaded(true)
        }
      } catch (error) {
        console.error('AdSense loading error:', error)
      }
    }

    // Delay ad loading to prevent immediate errors
    const timer = setTimeout(loadAd, 100)

    // Cleanup
    return () => clearTimeout(timer)
  }, [adSlot, adClient, isAdLoaded])

  return (
    <div
      className={`responsive-adsense ${className}`}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        ...style,
      }}
    >
      <ins
        ref={adRef}
        key={`ad-${adSlot}-${uniqueKey}`}
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
