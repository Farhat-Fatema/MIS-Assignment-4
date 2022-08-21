function showData()
{
    Event.preventDefault();
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+sDate+"T00:00:00Z&to="+eDate+"T00:00:00Z";

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;

            var c=res[index].Confirmed;
            var a=res[index].Active;
            var d=res[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("res").style.display="block";
            
        })
        .catch(() => alert("Request failed or Wrong Info. Please try again later"));

    }
}

function showCountry()
{
    Event.preventDefault();
    var country=document.getElementById("cname").value;
    var sDate=document.getElementById("sdate").value;
    var eDate=document.getElementById("edate").value;

    var capital=document.getElementById("capital");
    var flag=document.getElementById("flag");
    var population=document.getElementById("population");

    console.log(sDate);

    if(country=='' || sDate=='' || eDate=='')
    alert("enter the required field");

    else
    {
        var url="https://restcountries.com/v3.1/name/"+country;

        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            var length=res.length;
            var index=length-1;

            var c=res[index].capital;
            var a=res[index].flag;
            var d=res[index].population;

            capital.innerHTML=c;
            flag.innerHTML=a;
            population.innerHTML=d;

            document.getElementById("result").style.display="block";
            
        })
        .catch(() => alert("Request failed or Wrong Info. Please try again later"));

    }
}