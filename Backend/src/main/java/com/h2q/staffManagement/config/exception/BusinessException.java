package com.h2q.staffManagement.config.exception;

public class BusinessException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7046717106142266528L;

	private int errorCode;

	public BusinessException(String errorMessage) {
		super(errorMessage);
	}

	public BusinessException(int errorCode) {
		setErrorCode(errorCode);
	}

	public BusinessException(String errorMessage, int errorCode) {
		super(errorMessage);

		setErrorCode(errorCode);
	}

	public BusinessException(String errorMessage, Throwable err) {
		super(errorMessage, err);
	}

	public BusinessException(String errorMessage, int errorCode, Throwable err) {
		super(errorMessage, err);

		setErrorCode(errorCode);
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public int getErrorCode() {
		return errorCode;
	}


}
