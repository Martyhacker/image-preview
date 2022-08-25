export default function ImageBlock(props) {
    <div class="flex flex-wrap w-1/3">
        <div class="w-full p-1 md:p-2">
            <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src={props.url} />
        </div>
    </div>
}