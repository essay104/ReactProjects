import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'

const ContactList = () => {
    const { contactList, keyword } = useSelector((state) => state)
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        if (keyword !== "") {
            const list = contactList.filter((item) => item.name.includes(keyword))
            setFilteredList(list)
        } else {
            setFilteredList(contactList)
        }
    }, [keyword, contactList])

    return (
        <div>
            <SearchBox />
            {filteredList.map((item, idx) => (
                <ContactItem key={idx} item={item} />
            ))}
        </div>
    )
}

export default ContactList