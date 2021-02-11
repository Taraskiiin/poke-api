import React from 'react'

export default function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div className="btn-group mx-auto mb-4">
            <button className="btn btn-secondary btn-sm" onClick={goToPrevPage}>Previous</button>
            <button className="btn btn-secondary btn-sm" onClick={goToNextPage}>Next</button>
        </div>
    )
}
