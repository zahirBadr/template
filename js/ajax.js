$(document).ready(function() 
	{
	    $("#profile").click(function() 
	    {
	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType : false,
	                  processData : false,
	                  dataType: 'JSON',
	                  success : function(data, textStatus, jqXHR) {
	                        
	                        $("#firstname").val(data.firstname);
	                        $("#lastname").val(data.lastname);
	                        $("#email").val(data.email);
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#validat").click(function() 
	    {
	    	var firstname = $("#firstname").val();
       		var lastname = $("#lastname").val();
      		var email = $("#email").val();

      		var sendInfo = {
           		firstname: firstname,
           		lastname: lastname,
           		email: email
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Put',
	                  cache : false,
	                  contentType : false,
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {
	                        $("#messages").append("<li style='color: green;'>" + data + "</li>");	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	   	$("#register").click(function() 
	    {
	    	var firstname = $("#firstname").val();
       		var lastname = $("#lastname").val();
      		var email = $("#email").val();
      		var password = $("#password").val();

      		var sendInfo = {
           		firstname: firstname,
           		lastname: lastname,
           		email: email,
           		password : password
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType : false,
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {
	                        $("#messages").append("<li style='color: green;'>" + data + "</li>");	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    

	});