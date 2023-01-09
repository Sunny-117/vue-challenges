const css = ($node: HTMLElement, cssObj: object) => Object.assign($node.style, cssObj)

interface IAnimation {
  [key: string]: ($from: any, $to: any, direction: string) => void
  fade: ($from: any, $to: any) => void
  zoom: ($from: any, $to: any) => void
}

const PageAnimation: IAnimation = {
  slide($from, $to, direction) {
    $from.style = ""
    $to.style = ""
    css($from, {
      transform: `translateX(0)`,
      zIndex: 10
    })
    css($to, {
      transform: `translateX(${direction === "right" ? "-" : ""}100%)`,
      zIndex: 10
    })
    
    setTimeout(() => {
      css($from, {
        transform: `translateX(${direction === "left" ? "-" : ""}100%)`,
        transition: `all .5s`,
        
      })
      css($to, {
        transform: `translateX(0)`,
        transition: `all .5s`,
      })
    }, 0)
  },
  fade($from, $to) {
    $from.style = ""
    $to.style = ""
    css($from, {
      opacity: 1,
      zIndex: 10
    })
    css($to, {
      opacity: 0,
      zIndex: 9
    })
    
    setTimeout(() => {
      css($from, {
        opacity: 0,
        zIndex: 9,
        transition: `all 1s`,
        
      })
      css($to, {
        opacity: 1,
        zIndex: 10,
        transition: `all 1s`,
        
      })
    }, 0)
  },
  zoom($from, $to) {
    css($from, {
      opacity: 1,
      zIndex: 10,
      transform: `scale(1)`
    })
    css($to, {
      opacity: 0,
      zIndex: 9,
      transform: `scale(10)`
    })
    
    setTimeout(() => {
      css($from, {
        opacity: 0,
        zIndex: 9,
        transition: `all 1s`,
        transform: `scale(10)`
        
      })
      css($to, {
        opacity: 1,
        zIndex: 10,
        transition: `all 1s`,
        transform: `scale(1)`
        
      })
    }, 0)
  }
}

export default PageAnimation
