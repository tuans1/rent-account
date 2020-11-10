package com.h2q.staffManagement.config;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.h2q.staffManagement.config.exception.BusinessException;

import lombok.Data;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

	@ExceptionHandler(value = { BusinessException.class })
	protected ResponseEntity<Object> handleBusinessException(BusinessException ex, WebRequest request) {

		ExceptionResponseJson resBody = new ExceptionResponseJson(ex);

		return new ResponseEntity<Object>(resBody, HttpStatus.BAD_REQUEST);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {

		Map<String, Object> resBody = new LinkedHashMap<>();

		List<String> errors = ex.getBindingResult().getFieldErrors().stream().map(x -> x.getDefaultMessage())
				.collect(Collectors.toList());

		resBody.put("errorMessage", errors);

		return new ResponseEntity<>(resBody, headers, HttpStatus.BAD_REQUEST);

	}

	@Data
	class ExceptionResponseJson {
		private int errorCode;
		private String errorMessage;

		public ExceptionResponseJson(BusinessException ex) {
			errorCode = ex.getErrorCode();
			errorMessage = ex.getMessage();
		}
	}
}
