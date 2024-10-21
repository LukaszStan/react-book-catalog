import React from "react";

const BookCatalog = ({books}) => {
    const filterBooks = (selectCategory) =>{
        const booksItems = document.querySelectorAll('.book-item');
        booksItems.forEach((item) => {
            if (selectCategory === 'All' || item.dataset.category === selectCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const handleCategoryFilter = (event) =>{
        const selectedCategory = event.target.value;
        filterBooks(selectedCategory);
    }

    const handleAddBook = (event) =>{
        event.preventDefault();

        const title = event.target.title.value;
        const author = event.target.author.value;
        const category = event.target.category.value;
        const description = event.target.description.value;

        const newBookItem = document.createElement('li');
        newBookItem.classList.add('book-item');
        newBookItem.dataset.category = category;

        newBookItem.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Author:</strong> ${author}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Description:</strong> ${description}</p>
        `;

        document.querySelector('ul').appendChild(newBookItem);

        event.target.reset();
    }

    return(
        <div>
            <h2>Book Catalog</h2>

            <label htmlFor="categoryFilter">Filter by category: </label>
            <select id="categoryFilter" onChange={handleCategoryFilter}>
                <option value="All">All</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Crime">Crime</option>
                <option value="Documentary">Documentary</option>
                <option value="Horror">Horror</option>
            </select>

            <form onSubmit={handleAddBook}>
                <strong>Title:</strong> <input type="text" name="title" required/> <br/>
                <strong>Author:</strong> <input type="text" name="author" required/> <br/>
                <strong>Category:</strong> <input type="text" name="category" required/> <br/>
                <strong>Description:</strong> <textarea name="description" required></textarea> <br/>
                <button type="submit">Add Book</button>
            </form>

            <ul>
                {books.map((book, index) => (
                    <li key={index} className="book-item" data-category={book.category}>
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong>{book.author}</p>
                        <p><strong>Category:</strong>{book.category}</p>
                        <p><strong>Description:</strong>{book.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookCatalog