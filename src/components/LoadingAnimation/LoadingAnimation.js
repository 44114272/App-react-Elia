import './LoadingAnimation.css'

const LoadingAnimation = () => {
  return (
    <div className='container-loader'>
      <svg>
        <circle cx='50' cy='50' r='50'></circle>
      </svg>
    </div>
  )
}

export default LoadingAnimation