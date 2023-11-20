let $table = $('<table/>');

$('body').append($table);

$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('sortable');

let $headingRow = $('<tr/>');

$('thead').append($headingRow);
$headingRow.append($('<th/>').html('<a data-sort="name">First Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Last Name</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Gender</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name">Role</a>'));
$headingRow.append($('<th/>').html('<a data-sort="name"> Real Name</a>')); 
$headingRow.append($('<th/>').html('<a data-sort="date">Date of Birth</a>'));




$.ajax({
    type: "get",
    url: "character.json",
    error: function(){
        $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
    },
    success: function(response){
     
        $.each(response, function(index, value){
            
            let $row = $('<tr/>').addClass('row');
            $row.append($('<td  "></td>').text(value.firstName));
            $row.append($('<td></td>').text(value.lastName));
            $row.append($('<td> </td>').text(value.gender));
            $row.append($('<td></td>').text(value.role));
            $row.append($('<td></td>').text(value.realname));
            $row.append($('<td></td>').text(value.dob));

            $('tbody').append($row);
        });

    
            //start sorting
        var compare = {
            name: function(a,b){
                a = a.replace(/^the /i, '');
                b =  b.replace(/^the /i, '');
        
                if (a < b){
                    return -1;
                } else {
                    return a>b ? 1 : 0;
                }
            },
            duration: function(a,b){
                a = a.split(':');
                b = b.split(':');
        
                a = Number(a[0])*60 + Number(a[1]);
                b = Number(b[0])*60 + Number(b[1]);
        
                return a - b;
        
            },
            date: function(a,b){
                a = new Date(a);
                b = new Date(b);
        
                return a - b;
            }
        };
        
        $('.sortable').each(function(){
            var $table = $(this);
            var $tbody = $table.find('tbody');
            var $controls = $table.find('th a');
            var rows = $tbody.find('tr').toArray();

            const deepCopy = [...rows];
        
            $controls.on('click',function(){
                var $header = $(this);
                var order = $header.data('sort');
                var column;
              
                //If selected item has ascending or descending class, reverse contents
                if ($header.is('.ascending')){
                    
                    $header.toggleClass('ascending no-sort');
                    $header.addClass('ascending');
                    $header.toggleClass('ascending descending');
                   
                    $tbody.append(rows.reverse());
                    $header.html($header.text() + ' &#x25B2;');
                    
        
                } else if($header.is('.descending')){
                    $header.removeClass('descending ascending');
                    $header.toggleClass('no-sort');

                    $tbody.append(deepCopy);
                    $header.html($header.text() + ' &#x25BC;');
                }
                else {
                    $header.addClass('ascending');
                    $header.removeClass('no-sort');
                    $header.html($header.text() + "<span id='sort'></span>");
                    //Remove asc or desc from all other headers
                    $header.siblings().removeClass('ascending descending no sort');
                    
                    if (compare.hasOwnProperty(order)){
                        column = $controls.index(this);
                     rows.sort(function(a,b){
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            console.log('a: ',a,'   b: ', b)
                            return  compare[order](a,b);
                            
                            
                        });
                        $tbody.append(rows);
                    }
                }
                
            })
        })
           
        
        

    }
})