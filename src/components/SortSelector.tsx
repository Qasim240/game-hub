import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronBarDown } from 'react-icons/bs'

// props to pass function to notify the app component about the click event

interface props{
    onSelectSortOrder: (sortOrder: string) => void;
}



const SortSelector = ({onSelectSortOrder}: props) => {
    const sortOrder = [
        { value: '', label: 'Relenance' },
        { value: '-added', label: 'Date Added' },
        { value: '', label: 'Name' },
        { value: '-release', label: 'Release' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ]
    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>Order by: Relevance</MenuButton>
                <MenuList>

                  {sortOrder.map(order => <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default SortSelector