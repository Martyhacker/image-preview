export default function ImageButton(props) {
    return (
        <button onClick={() => navigator.clipboard.writeText(props.url)}>
            <img className='tap' src={props.url} height={'10%'} width={'50%'} />
        </button>
    )
}