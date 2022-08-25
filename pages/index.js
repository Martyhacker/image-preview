import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import ImageButton from '../components/image';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [message, setMessage] = useState('');
  var images = message != '' ? message.split('\n') : [];

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <textarea
          className='p-4 w-full h-full border border-solid border-slate-700'
          id="message"
          name="message"
          placeholder='Enter URL here'
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div>
        {
          images.map((entry) => {
            // return <Image src={entry} height={'50'} width={'50'}/>
            return <ImageButton key={entry} url={entry} />
          })
        }
      </div>
    </div>
  )
}
