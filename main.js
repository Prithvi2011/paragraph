function  getparagraph1()
{
var inputs = [];
for (var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("para1_input_box_1" + i).value);
    inputs.push(document.getElementById("para1_input_box_2" + i).value);
    inputs.push(document.getElementById("para1_input_box_3" + i).value);
    inputs.push(document.getElementById("para1_input_box_4" + i).value);
    inputs.push(document.getElementById("para1_input_box_5" + i).value);
    inputs.push(document.getElementById("para1_input_box_6" + i).value);
}
inputs.join(". ");
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
}

function  getparagraph2()
{
var inputs = [];
for (var i = 1 ; i <=6 ; i++)
{
    inputs.push(document.getElementById("para2_input_box_1" + i).value);
    inputs.push(document.getElementById("para2_input_box_2" + i).value);
    inputs.push(document.getElementById("para2_input_box_3" + i).value);
    inputs.push(document.getElementById("para2_input_box_4" + i).value);
    inputs.push(document.getElementById("para2_input_box_5" + i).value);
    inputs.push(document.getElementById("para2_input_box_6" + i).value);
}
inputs.join(". ");
document.getElementById("showparagraph2").innerHTML = inputs.join(". ");
}