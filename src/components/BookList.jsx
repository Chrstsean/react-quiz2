import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
      {books.map((book) => {
        const coverId = book.cover_i;
        const coverUrl = coverId
          ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
          : 'https://via.placeholder.com/150x200?text=No+Cover';

        return (
          <div key={book.key} className="border rounded p-4 shadow bg-white">
            <img src={coverUrl} alt={book.title} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="font-semibold text-lg">{book.title}</h3>
            <p className="text-sm text-gray-600">
              {book.author_name?.join(', ') || 'Unknown Author'}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
