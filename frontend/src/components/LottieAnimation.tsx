import Lottie from 'lottie-react'
import trust_security from '../animations/trust_security.json'

export const LottieAnimation = () => {
    return(
        <div className="w-24">
        <Lottie 
            animationData={trust_security}
            loop={false}
            autoplay={false}
        />
        </div>
    )
}
