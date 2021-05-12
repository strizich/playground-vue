let prevRatio = 0

const buildThresholds = () => {
  let thresholds = []
  const steps = 20

  for(let i = 1.0; i <= steps; i++) {
    let ratio = i/steps;
    thresholds.push(ratio)
  }
  return thresholds
}

const createObserver = (target, options) => {
  let observer;
  observer = new IntersectionObserver(handleIntersect, options)
  observer.observe(target)
}

const handleIntersect = (entries, observer) => {
  console.log(prevRatio, entries)
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      document.addEventListener('scroll', () => {
        window.scrollY
      })
    } else if(entry.intersectionRatio > 5) {
      console.log(entry.target, 'event listener destroyed')
      document.removeEventListener('scroll')
    }
  })
}

export { createObserver, buildThresholds};