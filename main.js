var names_list = [];
var display_names = [];

function submit() {
    for(i=1; i<=4; i++) {
        var name = document.getElementById("name_of_the_student_"+ i).value;
        
        names_list.push(name)
        console.log(name);
       
    }
    
    var array_length = names_list.length;

    console.log(array_length);
    for(var j = 0; j< array_length; j++) {
        display_names.push("<h4> Name - "+ names_list[j] + "</h4>");
        console.log(display_names);
    }
    document.getElementById("display_name_with_commas").innerHTML = display_names;
    var remove_commas = display_names.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline";
}
function sort() {
    var disp_names_sorted = [];
    names_list.sort();
    var sort_length = names_list.length;
    for(var k = 0; k< sort_length; k++) {
        disp_names_sorted.push("<h4> Name - "+ names_list[k] + "</h4>");
        console.log(disp_names_sorted);
    }
    document.getElementById("display_name_with_commas").innerHTML = disp_names_sorted;
    var remove_commas = disp_names_sorted.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    console.log(remove_commas);
}