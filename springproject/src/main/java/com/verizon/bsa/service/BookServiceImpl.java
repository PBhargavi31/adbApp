package com.verizon.bsa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;

import com.verizon.bsa.dao.BookDao;
import com.verizon.bsa.model.Book;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookDao bookDao;

	@CachePut(value="books" , key="#book.bcode")//access the parameter

	@Override
	public Book addBook(Book book) {
		return bookDao.addBook(book);
	}
	
	
	@CachePut(value="books" , key="#book.bcode")//access the parameter

	@Override
	public Book updateBook(Book book) {
		return bookDao.updateBook(book);
	}

	@Override
	public Book getBookById(int bcode) {
		return bookDao.getBookById(bcode);
	}

	@Override
	public boolean deleteBookById(int bcode) {
		return bookDao.deleteBookById(bcode);
	}

	@Override
	public List<Book> getAllBooks() {
		return bookDao.getAllBooks();
	}

}
