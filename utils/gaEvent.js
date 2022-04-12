const gaEvent = (eventName, callback) => {
  process.env.NODE_ENV === 'production' ? window.gtag('event', eventName,{
    'transport_type': 'beacon',
    'event_callback': function() {
      callback && callback();
    }
  }) : (
    callback && callback()
  )
}

export default gaEvent