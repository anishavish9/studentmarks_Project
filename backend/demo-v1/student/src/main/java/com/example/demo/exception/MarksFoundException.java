package com.example.demo.exception;

public class MarksFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public MarksFoundException(String message) {
		super(message);
	}
}
