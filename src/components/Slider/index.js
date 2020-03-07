import React, {useState, useRef} from 'react'


const Slide = ({transform, i, content}) => {    
      const slideRef = useRef()

      React.useEffect(() => {
           console.log(slideRef.current.offsetLeft)
           if(window.pageXOffset > window.innerWidth) {
               console.log('hayo')
           }
      }, [transform])

      if(i === 1) {
        return(
            <div style={{
                background: 'yellow',
                width: '200px',
                height: '120px',
                border: '2px solid transparent',
                borderRadius: '5px',
                marginRight: '30px',
                transform: `translateX(${transform}px)`
            }} ref={slideRef}>
               {content}
            </div>
        )
    }
    return(
        <div style={{
            background: 'blue',
            width: '200px',
            height: '120px',
            border: '2px solid transparent',
            borderRadius: '5px',
            marginRight: '30px',
            transform: `translateX(${transform}px)`
        }} ref={slideRef}>
            {content}
        </div>
    )
}

const Slider = ({children}) => {
    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            background: 'red',
            position: 'relative',
            top: 0,
            alignItems: 'center',
            width: '10000px',
            height: '200px'
        }}>
            {children}
        </div>
    )
}





const Wrapper = () => {
    const [state, setState] = useState({
        slideItems: [1, 2, 3, 4, 5],
    })

    const [transform, setTransform] = useState(0)

    const prev = () => {
        const newTransform = transform + 200
        setTransform(newTransform)
    
        
    }   

    const next = () => {
       const newTransform = transform - 200
       setTransform(newTransform)
   
    }   

    React.useEffect(() => {
        
    }, [transform])
   

    return(
        <div>
                <div style={{
                position: 'relative',
                background: 'yellow',
                width: '100%',
                overflow: 'hidden',
                height: '200px'
            }}>
                <Slider>
                    {
                        state.slideItems.map((data, i) => {                            
                                return(
                                    <Slide transform={transform} key={i} i={i} content={data}/>
                                )
                        })
                    }
                </Slider>
            
            </div>
            <button onClick={prev}>
                    prev
            </button>
            <button onClick={next}>
                    next
            </button>
        </div>
       
    )
}

export default Wrapper