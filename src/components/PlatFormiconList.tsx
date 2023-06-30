import { FaWindows, FaPlaystation, Fa500Px, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
// import { MdphoneIphone } from 'react-icons/si';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon, Text } from '@chakra-ui/react'
import { platform } from '../Hooks/useGame'
import { IconType } from 'react-icons';
interface props {
    platforms: platform[]
}
const PlatFormiconList = ({ platforms }: props) => {
    const iconMap: {[key: string]: IconType} = {
        
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintindo: SiNintendo,
        mac: FaApple,
        FaLinux: FaLinux,
        adndriod: FaAndroid,
        web: BsGlobe,


    }

    
    return (
        <>
        <HStack marginY={1}>
            {platforms.map((platform) => (
            <Icon as = {iconMap[platform.slug]} color='gray.500' />
            ))}
            </ HStack>
        </>
    )
}

export default PlatFormiconList