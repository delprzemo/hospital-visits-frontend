import './SearchBar.scss'
import { FaSearch } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { debounce } from 'lodash'

export type SearchBarProps = {
  label?: string
  id: string
  placeHolder: string
  onSearch: (searchText: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  id,
  label,
  placeHolder,
  onSearch,
}) => {
  const [, setSearchText] = useState('')
  const debouncedOnSearchRef = useRef(debounce((query) => onSearch(query), 500))

  const handleSearchTextChange = (e: any) => {
    const value = e.target.value
    setSearchText(value)
    debouncedOnSearchRef.current(value)
  }

  return (
    <div className="form-group search-bar">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id={id}
          placeholder={placeHolder}
          onChange={handleSearchTextChange}
        />
        <div className="input-group-append">
          <span className="input-group-text">
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
