//Assignment-3 
//Nihar Ghevaria (0806797)

$(document).ready(function(){
     //first();
     second();
     
    });
    



function first(){
        $.getJSON("team.json",function(dataOne){
            // console.log(dataOne);
            $.each(dataOne.members,function(index,object){
                $("#team").append("<h2>"+ object.name + "</h2>"+"<h5>" + object.position +"</h5>"+"<p>"+object.bio+"</p>");
            })
        })    
}


function second(){
  
    $.ajax({
        type:"GET",
        url:"team.json",
        dataType :"Json",
        
        beforeSend : function delay(){
            $("#team").append("<strong>"+"Loading..."+"</strong>");           
        },
        error : function(){
            $("#team").append("Opps!There is an error, Content can not load.");
            
        },        
        success: function (res) {          
            setTimeout(function () {
                $("#team").empty();
                $.each(res.members, function (index, object) {
                    $("#team").append("<h2>" + object.name + "</h2>" + "<h5>" + object.position + "</h5>" + "<p>" + object.bio + "</p>");
                });
            }, 3000); 
        },    
        
    })
}