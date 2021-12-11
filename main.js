var canvas=new fabric.Canvas('my_canvas');

player_y=25;

block_img_width=200;
block_img_height=450;

var block_img_obj="";

function SetPowerRanger(get_img)
{
    fabric.Image.fromURL(get_img,function(img)
    {
        block_img_obj=img;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({top:player_y,left:player_x});
        canvas.add(block_img_obj);
    });
 }
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode
    console.log(keyPressed);
	
    if(keyPressed == '82') //Red Ranger
    {
        player_x=10;
        SetPowerRanger('Red Ranger.png')
    }
    if(keyPressed == '71') //Green Ranger
	{
		player_x= 330;
		SetPowerRanger('Green Ranger.png');
    }
	if(keyPressed == '89') //Yellow Ranger
	{
		player_x=560;
		SetPowerRanger('Yellow Ranger.png');
	}
	if(keyPressed == '80') //Pink Ranger
	{
		player_x=880;
		SetPowerRanger('Pink Ranger.png');
	}
	if(keyPressed == '66') //Blue Ranger
	{
		player_x=1200;
		SetPowerRanger('Blue Ranger.png');
	}    
}
