import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'



interface props {
    onSearch: (searchText: string) => void
}

const SearchInput = ({onSearch}: props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <>
            <Box marginBottom={5}>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) onSearch(ref.current.value)
                }}>
                    <InputGroup>
                        <InputLeftElement children={< BsSearch />}>
                        </InputLeftElement>
                        <Input ref={ref} type='tel' placeholder='Phone number' />
                    </InputGroup>
                </form>
            </Box>


        </>
    )
}

export default SearchInput