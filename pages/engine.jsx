import { search } from "./api/controllers/searchController"
import { useState } from "react";
import axios from "axios";
import ImageBlock from "../components/image_block";

export default function Engine() {
    const [images, setImages] = useState([]);
    var search = async (query) => {
        const response = await axios({
            method: 'POST',
            url: '/api/scraper',
            // data: JSON.stringify(`{search: ${query}}`),
            data: {
                'search': query
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setImages(response.data['data']);
    }
    const [searchText, setsearchText] = useState('');
    const handleMessageChange = event => {
        // 👇️ access textarea value
        setsearchText(event.target.value);
        console.log(event.target.value);
    };
    return (
        <div className="bg-blue-900 h-full">
            <section className="search pt-8 px-28">
                <div className="search-wrapper">
                    <div className="search-container bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                        <button onClick={() => search(searchText)} className="outline-none focus:outline-none">
                            <svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </button>
                        <input type="search" name="" id=""
                            placeholder="search for images"
                            onChange={handleMessageChange}
                            onSubmit={search(searchText)}
                            x-model="q"
                            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" />
                    </div>
                </div>
            </section >
            <section className="overflow-hidden text-gray-700 ">
                <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        {
                            images.map(image => <ImageBlock url={image.thumbnail} />)
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}