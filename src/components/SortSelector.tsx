import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Order by: Relevance</MenuButton>
                <MenuList>
                 
                 <MenuItem>
                 here
                 </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default SortSelector