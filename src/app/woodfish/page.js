'use client'

import {useState,useRef,useCallback, useMemo} from 'react'
function Page() {
    const [counter, setCounter] = useState(0)
    const soundRef = useRef(null)
    const [sen, setSen] = useState(null)
    const Senten = useMemo(()=>{
        return [
            "一切皆为虚幻。",
            "色即是空，空即是色。",
            "一花一世界，一佛一如来。",
            "忍耐是金",
            "隊友係on9"
        ]
      },[])

// Optimized click handler using useCallback to memoize the function
  const handleClick = useCallback(() => {
    if (soundRef.current) {
      soundRef.current.play()
    }
    setCounter((x) => x + 1)
    setSen(Senten[randomIn5()])
  }, [Senten])

  function randomIn5() {
    return Math.floor(Math.random() * 5);
  }
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>功德{counter}</div>
        <div>{sen}</div>
        <div onClick={handleClick}>
            <img src='/muyu.png' />
        </div>
        <audio ref={soundRef} type='audio/mpeg'  src='/muyu.mp3'/>
    </div>
  )
}

export default Page