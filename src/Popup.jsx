import useMyContext from './context/DataContext'

export default function Popup() {
    const { popup, setPopup } = useMyContext()
    return <div
        className='overlay'
        onClick={() => setPopup()}>
        <button onClick={() => setPopup()}>X</button>
        <div className='popup' onClick={(e) => { e.stopPropagation() }}>{popup}</div>
    </div>
}
