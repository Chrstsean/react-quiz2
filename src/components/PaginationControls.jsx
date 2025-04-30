import React from 'react';

const PaginationControls = ({ page, setPage }) => {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span className="self-center">Page {page}</span>
      <button
        onClick={() => setPage(page + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
