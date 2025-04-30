import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import PaginationControls from './components/PaginationControls';
import FileUploader from './components/FileUploader';

const BookSearchComponent = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`);
      const data = await res.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
    setLoading(false);
  }, [query, page]);

  useEffect(() => {
    if (query) {
      fetchBooks();
    }
  }, [fetchBooks, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchBooks();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploadFile(file);
    console.log('Uploaded file:', file);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-[#1e1e2f] shadow-2xl rounded-xl p-6 md:p-10 flex flex-col items-center text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#e94560]">📚 Book Finder</h1>
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <FileUploader handleUpload={handleUpload} uploadFile={uploadFile} />
        {loading ? (
          <p className="text-xl text-[#e94560]">Loading...</p>
        ) : (
          <BookList books={books} />
        )}
        <PaginationControls page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default BookSearchComponent;
