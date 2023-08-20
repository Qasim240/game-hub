import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronBarDown } from 'react-icons/bs'
import usePlatforms from '../Hooks/usePlatforms'
import { Platform } from '../Hooks/useGame';
interface props{
    onSelectPlatform: (platform: Platform) => void;
}

const PlatFormSelector = ({onSelectPlatform}: props) => {
    const {data, error} = usePlatforms();
    if(error) return null;
    return (
        <div>
            <Menu >
                <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Platform</MenuButton>
                <MenuList>
                 {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatFormSelector