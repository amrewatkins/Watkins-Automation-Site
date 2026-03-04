'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
  posthog.init('phc_EZI2zO7TajdRIQBleY29kdJMoeVXZltAKKvlxd5vbTu', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false, // We'll manually capture pageviews
    capture_pageleave: true, // Track when users leave pages (for bounce rate)
    enable_recording_console_log: true, // See console errors in session replays
    session_recording: {
      recordCrossOriginIframes: true,
    },
  })
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export function PostHogPageView() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.capture('$pageview')

      // Track scroll depth
      let maxScroll = 0
      const handleScroll = () => {
        const scrollPercentage = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        )
        if (scrollPercentage > maxScroll) {
          maxScroll = scrollPercentage
          if (maxScroll >= 25 && maxScroll < 50) {
            posthog.capture('scroll_depth_25')
          } else if (maxScroll >= 50 && maxScroll < 75) {
            posthog.capture('scroll_depth_50')
          } else if (maxScroll >= 75 && maxScroll < 100) {
            posthog.capture('scroll_depth_75')
          } else if (maxScroll >= 100) {
            posthog.capture('scroll_depth_100')
          }
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
