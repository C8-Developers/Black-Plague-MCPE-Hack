ModPE.langEdit("menu.copyright","§4The Black Plague");
ModPE.langEdit("menu.play","§4§lStart");
ModPE.langEdit("menu.settings","§l§4Settings");
ModPE.langEdit("menu.store","Store");
ModPE.langEdit("menu.achievements","Achievements");

var lines = "______________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________";


 var menuName = "Black Plague B1";
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var logNum = 1;

 ModPE.log(logNum);

 MenuBtn();
print("Coded By Cloud 8 Playz");

 var menuName = "The Black Plague";
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var logNum = 1;

 ModPE.log(logNum);

 MenuBtn();
print("The Black Plague");

function MenuBtn(){
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
try{
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
var menuBtn=new android.widget.Button(ctx);
menuBtn.setText("CC");
menuBtn.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){ 
tempMenu();
xbutton();

}}));
layout.addView(menuBtn);

                    tempBtn=new android.widget.PopupWindow(layout,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT,android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
tempBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

tempBtn.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0);
}catch(err){print("temp err : "+err)}}}));} 

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function dip2px(dips){var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)}
var tempBtn;
var MenuVarible;



function xbutton(){
clientMessage("§4"+menuName+"§l Opened!");
}



function tempMenu(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run:function(){
try{
var menuLayout=new android.widget.LinearLayout(ctx);
var menuScroll=new android.widget.ScrollView(ctx);
var menuLayout1=new android.widget.LinearLayout(ctx);
menuLayout.setOrientation(1);
menuLayout1.setOrientation(1);
menuScroll.addView(menuLayout);
menuLayout1.addView(menuScroll);



           var text=new android.widget.TextView(ctx);
text.setTextSize(30);

text.setText("The Black Plague");
text.setGravity(android.view.Gravity.CENTER);text.setTextColor(android.graphics.Color.GREY);

     
text.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.TRANSPARENT));       
menuLayout.addView(text);


//scrollin text
var scrollText = new android.widget.TextView(ctx);
scrollText.setText(lines);
scrollText.setTextSize(5);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView (scrollText);
//end


//author 
var text2=new android.widget.TextView(ctx);
text2.setTextSize(16);
//change text to what ever you want

text2.setText("Made By Cloud 8 Playz");
text2.setGravity(android.view.Gravity.CENTER);
text2.setTextColor(android.graphics.Color.CYAN);

text2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.TRANSPARENT));       
menuLayout.addView(text2);


//scrollin text
var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Thank You"+ Player.getName(Player.getEntity()) +" For Using The Black Plague B1!");
scrollText.setTextSize(16);                                                                                  scrollText.setTextColor(android.graphics.Color.RED);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable( android.graphics.Color.TRANSPARENT ));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
menuLayout.addView (scrollText);
//end



//close btn
           var button=new android.widget.Button(ctx);
button.setText("Close");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.RED);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){

 MenuVarible.dismiss();
//put the mod code here
clientMessage("§4"+menuName+"§l Closed!");

}}));
menuLayout.addView(button);



//btn
           var button=new android.widget.Button(ctx);
button.setText("Diamond Give");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
Player.addItemInventory(57, 64, 0);
clientMessage("§4 Diamonds Given");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText(Creative);

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setGameMode(1);
clientMessage("§4 Creative Enabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText(Survival);

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setGameMode(0);
clientMessage("§4 Creative Disabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText(Godmode);

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setHealth(9999);
clientMessage("§4 Godmode Enabled");

}}));

menuLayout.addView(button);


var button=new android.widget.Button(ctx);
button.setText(Suicide);

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setHealth(0);
clientMessage("§4 Ded");

}}));

menuLayout.addView(button);


var button=new android.widget.Button(ctx);
button.setText("Full Diamond");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setArmorSlot(1, 310 , 0);
Player.setArmorSlot(2, 311 , 0);
Player.setArmorSlot(3, 312 , 0);
Player.setArmorSlot(4, 313 , 0);
clientMessage("§4 Armor Added");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Full Iron");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setArmorSlot(1, 306 , 0);
Player.setArmorSlot(2, 307 , 0);
Player.setArmorSlot(3, 308 , 0);
Player.setArmorSlot(4, 309 , 0);
clientMessage("§4 Armor Added");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Fly On");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setCanFly(1)
clientMessage("§4 Fly Enabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Fly Off");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setCanFly(0)
clientMessage("§4 Fly Disabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("XP Add");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setExp(999999)
clientMessage("§4 XP Added");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("XP Wipe");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setExp(0)
clientMessage("§4 XP Cleared");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Heal");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
Player.setHealth(20)
clientMessage("§4 Healed");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Pro FOV");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
ModPE.setFOV(120)
clientMessage("§4 Pro FOV Enabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("Reset FOV");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
ModPE.resetFov();
clientMessage("§4 Pro FOV Disabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("LBSG Speed Bypass");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
ModPE.setGameSpeed(25)
clientMessage("§4 Speed Enabled");

}}));

menuLayout.addView(button);

var button=new android.widget.Button(ctx);
button.setText("How To Self Destruct");

         
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       
 button.setTextColor(android.graphics.Color.WHITE);

button.setOnClickListener(new android.view.View.OnClickListener({
onClick:function(viewarg){
clientMessage("§4 You Must Be On Win10");
clientMessage("§4 Download Our Self Destructing Batch File");
clientMessage("§4 Its Coming Soon...");

}}));

menuLayout.addView(button);

              MenuVarible=new android.widget.PopupWindow(menuLayout1,ctx.getWindowManager().getDefaultDisplay().getWidth()/2.5,ctx.getWindowManager().getDefaultDisplay().getHeight());

MenuVarible.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100,0,26,100)));
MenuVarible.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER|android.view.Gravity.CENTER,0,0)
}catch(error){
print("menu.error: "+error)}}}))}

function leaveGame(){var activity=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

activity.runOnUiThread(new java.lang.Runnable({run:function(){if(MenuVarible!=null){MenuVarible.dismiss();MenuVarible=null}if(tempBtn!=null){tempBtn.dismiss();tempBtn=null}}}))}
