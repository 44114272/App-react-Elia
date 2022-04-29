import './Alert.css'

export function Alert({message}){
    return <div className='container-alert'>
        <span>{message}</span>
    </div>
}