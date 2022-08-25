export default function ImageButton(props) {
    return (
        <button key={props.key} onClick={() => navigator.clipboard.writeText(props.url)}>
            <Image className='tap' src={props.url} height={'10%'} width={'50%'} />
        </button>
    )
}