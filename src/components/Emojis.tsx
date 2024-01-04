import React from 'react'
import bullseye  from '../assets/bulls-eye.webp';
import meh  from '../assets/meh.webp';
import thumbsup  from '../assets/thumbs-up.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface props {
    rating: number;  
}
const Emojis = ({rating}: props) => {


    const EmojiMap: {[key: number]: ImageProps} = {
        3: {src: meh, alt: 'meh', boxSize: '28px'},
        4: {src: bullseye, alt: 'recommended', boxSize: '28px'},
        5: {src: thumbsup, alt: 'exaptional', boxSize:'20px'},
    }


  
    return (
        <>
           <Image {...EmojiMap[rating]} marginY={2} /> 

        </>
    )
}

export default Emojis