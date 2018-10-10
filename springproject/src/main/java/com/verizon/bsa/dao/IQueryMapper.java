package com.verizon.bsa.dao;

//store for creating queries
public interface IQueryMapper {
	
	public static final String INS_BOOK_QRY=
			"INSERT INTO books VALUES(?,?,?,?,?)";
	public static final String DEL_BOOK_QRY=
			"DELETE FROM books WHERE bcode=?";
	public static final String UPDATE_BOOK_QRY=
			"UPDATE books SET title=?,price=?,catg=?,type=? WHERE bcode=?";
	public static final String GET_BOOK_QRY=
			"SELECT * FROM books WHERE bcode=?";
	public static final String GET_ALL_BOOKS_QRY=
			"SELECT *FROM books";

}
