import React from 'react'

const SearchCity = ({location, updateLocation, searchLocation }: {location: string, updateLocation: any, searchLocation: any}  ) => {
  return (
    <input
            value={location}
            onKeyDown={(event) => searchLocation(event)}
            onChange={(event) => updateLocation(event.target.value)}
            placeholder="Enter Location"
            type="text"
          />
  )
}

export default SearchCity