export default function ImageBlock(props) {
    return (<div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
            <Image alt={props.url} className="text-white block object-cover object-center w-full h-full rounded-lg"
                src={props.url} />
        </div>
    </div>)
}