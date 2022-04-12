import React from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

const GA_TRACKING_ID = 'G-SXRMF1DM3K'

const GoogleAnalytics = () => {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      // @ts-ignore
      window.gtag('config', GA_TRACKING_ID, { page_path: url })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              send_page_view: false,
              send_scroll: false
            });
          `
        }}
      />
    </>
  )
}

// page_path: window.location.pathname,

export default GoogleAnalytics;
