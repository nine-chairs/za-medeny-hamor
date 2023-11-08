import React from 'react'

interface DropdownItemProps {
  language: string
  text: string
  onItemClick: (language: string) => void
}

const DropdownItem: React.FC<DropdownItemProps> = (props) => {
  return (
    <li className='dropdownItem' onClick={() => props.onItemClick(props.language)}>
      {props.text}
    </li>
  )
}

export default DropdownItem