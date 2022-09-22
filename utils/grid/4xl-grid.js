import React from 'react'

const Fourgrid = () => {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed
     border-2 h-24" >
          <h1 className="text-5xl text-red-600">  What up</h1>

        </div>
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-900  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-900  dark:border-gray-700 border-dashed border-2 h-24" />
      </div>



      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />

        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
      </div>
    </>
  )
}

export default Fourgrid