var data = {
    "users" : [
        {
            "id" : 1, 
            "name" : "Rakesh Kumar",
            "email" : "rakesh@yahoo.com",
            "joined" : "1st December 2019",
            "status" : "Active",
            "DataUsed" : [
                {
                    "Date" : "1st January 2020",
                    "MB" : 30420, 
                    "Paid" : true 
                },
                {
                    "Date" : "1st February 2020",
                    "MB" : 32419,
                    "Paid" : true 
                },
                {
                    "Date" : "1st March 2020",
                    "MB" : 51342,
                    "Paid" : true
                },
                {
                    "Date" : "1st April 2020",
                    "MB" : 26531,
                    "Paid" : true
                },
                {
                    "Date" : "1st May 2020",
                    "MB" : 14251,
                    "Paid" : true
                },
                {
                    "Date" : "1st June 2020",
                    "MB" : 65214,
                    "Paid" : true
                },
                {
                    "Date" : "1st July 2020",
                    "MB" : 51243,
                    "Paid" : true
                },
                {
                    "Date" : "1st August 2020",
                    "MB" : 32654,
                    "Paid" : true
                },
                {
                    "Date" : "1st September 2020",
                    "MB" : 35124,
                    "Paid" : true
                },
                {
                    "Date" : "1st October 2020",
                    "MB" : 41253,
                    "Paid" : true
                },
                {
                    "Date" : "1st November 2020",
                    "MB" : 21453,
                    "Paid" : true
                },
                {
                    "Date" : "1st December 2020",
                    "MB" : 15986,
                    "Paid" : true
                },
                {
                    "Date" : "1st January 2021",
                    "MB" : 54786,
                    "Paid" : true
                },
                {
                    "Date" : "1st February 2021",
                    "MB" : 48562,
                    "Paid" : true
                },
                {
                    "Date" : "1st March 2021",
                    "MB" : 52489,
                    "Paid" : true
                },
                {
                    "Date" : "1st April 2021",
                    "MB" : 54182,
                    "Paid" : true
                },
                {
                    "Date" : "1st May 2021",
                    "MB" : 33526,
                    "Paid" : false
                }
            ]
        },
        {
            "id" : 1, 
            "name" : "Uma Rani",
            "email" : "umarani@gmail.com",
            "joined" : "1st October 2020",
            "status" : "Active",
            "DataUsed" : [
                {
                    "Date" : "1st October 2020",
                    "MB" : 54126,
                    "Paid" : true
                },
                {
                    "Date" : "1st November 2020",
                    "MB" : 84523,
                    "Paid" : true
                },
                {
                    "Date" : "1st December 2020",
                    "MB" : 74521,
                    "Paid" : true
                },
                {
                    "Date" : "1st January 2021",
                    "MB" : 95623,
                    "Paid" : true
                },
                {
                    "Date" : "1st February 2021",
                    "MB" : 75142,
                    "Paid" : true
                },
                {
                    "Date" : "1st March 2021",
                    "MB" : 84521,
                    "Paid" : true
                },
                {
                    "Date" : "1st April 2021",
                    "MB" : 65234,
                    "Paid" : true
                },
                {
                    "Date" : "1st May 2021",
                    "MB" : 52364,
                    "Paid" : true
                }
            ]
        }
    ]
} ;
var idx = -1 ;
$(document).ready(function()
{
    $('#details').hide() ;
    $('#get').click(function()
    {
        var user = $('#name').val().trim() ;
        if(user == "")
        alert("Enter a valid name") ;
        else 
        {
            var encod = "\"" + user + "\"" ;
            let found = false ;
            for(var i = 0 ; i < data.users.length ; i++)
            {
                var temp = JSON.stringify(data.users[i].name) ;
                if(temp === encod)
                {
                    idx = i ;
                    found = true ;
                    break ;
                }
            }
            if(!found) alert("No such User exists") ;
            else 
            {
                $('#form').hide() ;
                $('#details').show() ;
                var x = "<br><h1> Personal Information </h1><br><table width = 25% class=\"table table-striped\" id=\"info\"><tr><td>Name</td><td>" ;
                var st = JSON.stringify(data.users[idx].name) ;
                var k = "" ;
                for(let i = 1 ; i < st.length - 1 ; i++)
                k += st[i] ;
                x += k ;
                st = JSON.stringify(data.users[idx].email) ;
                k = "" ;
                for(let i = 1 ; i < st.length - 1 ; i++)
                k += st[i] ;
                x += "</td></tr><tr><td>Email</td><td>"
                x += k ;
                st = JSON.stringify(data.users[idx].joined) ;
                k = "" ;
                for(let i = 1 ; i < st.length - 1 ; i++)
                k += st[i] ;
                x += "</td></tr><tr><td>Joined on</td><td>"
                x += k
                x += "</td></tr><tr><td>Status</td><td>"
                st = JSON.stringify(data.users[idx].status) ;
                k = "" ;
                for(let i = 1 ; i < st.length - 1 ; i++)
                k += st[i] ;
                x += k
                x += "</td></tr></table>" ;
                x += "<br><br><h1>Monthly Status</h1><br><table class = \"table table-striped\"><tr><th>Sl.No</th><th>Date</th><th>MB Consumed</th><th>Amount</th><th>Payment Status</th></tr>" ;
                for(let i = 0 ; i < data.users[idx].DataUsed.length ; i++)
                {
                    x += "<tr><td>" ;
                    x += JSON.stringify(i + 1) ;
                    x += "</td><td>" ;
                    var st = JSON.stringify(data.users[idx].DataUsed[i].Date) ;
                    k = "" ;
                    for(let i = 1 ; i < st.length - 1 ; i++)
                    k += st[i] ;
                    x += k ;
                    x += "</td><td>" ;
                    st = JSON.stringify(data.users[idx].DataUsed[i].MB) ;
                    x += st ;
                    x += "</td><td>" ;
                    st = JSON.stringify(data.users[idx].DataUsed[i].MB * 0.02) ;
                    k = "" ;
                    for(let i = 0 ; i < st.length ; i++)
                    {
                        k += st[i] ;
                        if(st[i] == '.')
                        {
                            if(st[i + 1] === undefined)
                            k += "0" ;
                            else k += st[i + 1] ;
                            if(st[i + 2] === undefined)
                            k += "0" ;
                            else k += st[i + 2] ;
                            break ;
                        }
                    }
                    x += k ;
                    x += "</td><td>" ;
                    if(data.users[idx].DataUsed[i].Paid)
                    x += "Paid</td>" ;
                    else x += "Pending</td>" ;
                }
                x += "</table>" ;
                document.getElementById('details').innerHTML = x ;
                console.log(x) ;
            }
        }
    }) ;
}) ;