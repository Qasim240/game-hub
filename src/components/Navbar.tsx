import { Box, Flex, HStack, Img, } from '@chakra-ui/react'
import logo from '../assets/Logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


interface props {
  onSearch: (searchText: string) => void
}

const Navbar = ({onSearch}: props ) => {
  return (
    <HStack justifyContent='space-between' alignItems='center' padding='20px' >
      <Flex alignItems='center'>
        <Img src={logo} boxSize='60px' />
        <SearchInput onSearch={onSearch} />
      </Flex>
      <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar