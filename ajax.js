
$(document).ready(function() 
	{

		//login.html
		$("#login").click(function() 
	    {
	    	var email = $("#email").val();
	    	var password = $("#password").val();

	    	var sendInfo = {
           		email: email,
           		password : password
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data : sendInfo,
	                  success : function(data, textStatus, jqXHR) {
	                        window.location.href="myFiles.html"	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<p style='color: red;'>" + "Incorrect email or password" + "</p>");
	                  }
	                });
	    });


		//profile.html
	    $("#profile").click(function() 
	    {
	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
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
	                  contentType: "application/json; charset=utf-8",
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



	    //register.html
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
	                  contentType: "application/json; charset=utf-8",
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



	    //myFiles.html
	    $("#myFiles").click(function() 
	    {
	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  success : function(data, textStatus, jqXHR) {
	                        
	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.confidentiality + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#delete").click(function() 
	    {
	    	var idfile = $("#idfile").val();

      		var sendInfo = {
           		idfile: idfile
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {
	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.confidentiality + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#filter").click(function() 
	    {
	    	var option = $("#option").val();

      		var sendInfo = {
           		option: option
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {
	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.confidentiality + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})	                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });



	    //withFreinds.html
	    $("#withFreinds").click(function() 
	    {
	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  success : function(data, textStatus, jqXHR) {
	                        
	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#delete").click(function() 
	    {
	    	var idfile = $("#delete").val();

      		var sendInfo = {
           		idfile: idfile
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Delete',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {

	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#filter").click(function() 
	    {
	    	var option = $("#option").val();

      		var sendInfo = {
           		option: option
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {

	                        data.forEach(function (d/*, index*/){
			    				var ligne = $("<tr></tr>");
								ligne.append($("<td>" + d.namefile + "</td>"));
								ligne.append($("<td>" + d.typefile + "</td>"));
								ligne.append($("<td>" + d.sizefile + "</td>"));
								ligne.append($("<td> <button id="+"delete"+"  value= "+ d.idfile +" > <i class="+"icon-cancel icon-larger red-color"+"></i> </button> </td>"));
								ligne.append($("<td> <button id="+"download"+" value= "+ d.idfile +" > <i class="+"icon-cancel icon-download"+"></i> </button> </td>"));
								$("#infoFiles").append(ligne);
							})                        
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });



	    //freinds.html
	    $("#freinds").click(function() 
	    {
	                $.ajax({
	                  url : '',
	                  type : 'Get',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  success : function(data, textStatus, jqXHR) {
	                        
	                        data.forEach(function (d/*, index*/){
			    				var div = $("<div class="+"col-lg-3 col-sm-6"+"></div>");
								div.append($("<div class="+"card primary-view"+">"));
								div.append($("<div class="+"card-header"+">"));
								div.append($("<div class="+"card-photo"+"><img title="+"Tom Brown"+" alt="+"Tom Brown"+" src="+"images/man-3.jpg"+" class="+"img-circle avatar"+"></div>"));
								div.append($("<div class="+"card-short-description"+"><h5><span class="+"user-name"+"><a href=>"+ d.username +"</a></span></h5> <button id="+"delete"+" value="+ d.userid +" class="+"btn btn-default"+">Delete</button> </div>"));
								div.append($("</div>"));
								div.append($("</div>"));

								$("#freindsList").append(div);

							})
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#delete").click(function() 
	    {
	    	var iduser = $("#delete").val();

      		var sendInfo = {
           		iduser: iduser
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Delete',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  success : function(data, textStatus, jqXHR) {
	                        
	                        data.forEach(function (d/*, index*/){
			    				var div = $("<div class="+"col-lg-3 col-sm-6"+"></div>");
								div.append($("<div class="+"card primary-view"+">"));
								div.append($("<div class="+"card-header"+">"));
								div.append($("<div class="+"card-photo"+"><img title="+"Tom Brown"+" alt="+"Tom Brown"+" src="+"images/man-3.jpg"+" class="+"img-circle avatar"+"></div>"));
								div.append($("<div class="+"card-short-description"+"><h5><span class="+"user-name"+"><a href=>"+ d.firstname+" "+ d.lastname +"</a></span></h5> <button id="+"delete"+" value="+ d.userid +" class="+"btn btn-primary"+">Delete</button> </div>"));
								div.append($("</div>"));
								div.append($("</div>"));

								$("#freindsList").append(div);

							})
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });

	    $("#addUser").click(function() 
	    {
	    	var email = $("#email").val();

      		var sendInfo = {
           		email: email
       						};

	                $.ajax({
	                  url : '',
	                  type : 'Post',
	                  cache : false,
	                  contentType: "application/json; charset=utf-8",
	                  processData : false,
	                  dataType: 'JSON',
	                  data: sendInfo,
	                  success : function(data, textStatus, jqXHR) {

	                        data.forEach(function (d/*, index*/){
			    				var div = $("<div class="+"col-lg-3 col-sm-6"+"></div>");
								div.append($("<div class="+"card primary-view"+">"));
								div.append($("<div class="+"card-header"+">"));
								div.append($("<div class="+"card-photo"+"><img title="+"Tom Brown"+" alt="+"Tom Brown"+" src="+"images/man-3.jpg"+" class="+"img-circle avatar"+"></div>"));
								div.append($("<div class="+"card-short-description"+"><h5><span class="+"user-name"+"><a href=>"+ d.firstname+" "+ d.lastname +"</a></span></h5> <button id="+"delete"+" value="+ d.userid +" class="+"btn btn-primary"+">Delete</button> </div>"));
								div.append($("</div>"));
								div.append($("</div>"));

								$("#freindsList").append(div);                     
	                  },
	                  error : function(jqXHR, textStatus, errorThrown) {
	                        $("#messages").append("<li style='color: red;'>" + "erreur" + "</li>");
	                  }
	                });
	    });


	});