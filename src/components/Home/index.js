import React, {useEffect, useRef} from "react";
import Lottie from "lottie-web";
const Home = () => {

    
    const container = useRef(null)
            useEffect(() => {


                Lottie.loadAnimation({
                    container: container.current,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: require('../../animate.json')
                })
            }, [])

        return(
            <div className="container" ref={container}></div>
        )
        }

export default Home;