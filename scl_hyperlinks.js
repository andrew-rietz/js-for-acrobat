/*

In acrobat, coordinates are given in points. There are 72 points per inch, and points can be given as decimals

*/


for ( var p = 0; p < this.numPages; p++){
  var b = this.getPageBox("Crop", p);
  this.removeLinks(p, b);
}

// for (var p = 0; p < this.numPages; p++)
// // var p=13;
//
//   {
//
//   var numWords = this.getPageNumWords(p);
//
//   for (var i=0; i<(numWords-2); i++)
//
//   {
//
//   var ckWord1 = this.getPageNthWord(p, i, true);
//   var ckWord2 = this.getPageNthWord(p, i+1, true);
//   var ckWord3 = this.getPageNthWord(p, i+2, true);
//
//   if ( ckWord1 + ckWord2 + ckWord3 == "SEETHEDATA")
//
//   {
//
//   var q = this.getPageNthWordQuads(p, i);
//
//   var a = q.toString();
//   var b = new Array();
//
//   b = a.split(",");
//
//   var left= b[0];
//
//   var right= b[2]
//
//   var top= b[3];
//
//   var bottom= b[1];
//
//   var button_left = left - 21.74;
//   var button_right = right + 73.58;
//   var button_top = top - 4.49;
//   var button_bottom = bottom - 2.7
//
// qd = [ [left, top, right, top, left, bot, right, bot] ];
// qd.toSource();
//
//   }
//
//   }
//
//   }
// 490.0188903808594,439.68035888671875,505.4850769042969,439.68035888671875,490.0188903808594,424.37060546875,505.4850769042969,424.37060546875
// 490.0188903808594,73.49685668945312,505.4850769042969,73.49685668945312,490.0188903808594,58.187103271484375,505.4850769042969,58.187103271484375
// 1102.03515625,300.85687255859375,1117.501220703125,300.85687255859375,1102.03515625,285.547119140625,1117.501220703125,285.547119140625
//
// true
//
//
// Get the coordinates of a rectangle drawn around the button
//
// var rct = getAnnots(this.pageNum)[4].rect;
// var left = rct[0];
// var right = rct[2];
// var top = rct[3];
// var bot = rct[1];
// qd = [ [left, top, right, top, left, bot, right, bot] ];
// qd.toSource();
//
// [[468.2750549316406, 444.174072265625, 579.068359375, 444.174072265625, 468.2750549316406, 421.6691589355469, 579.068359375, 421.6691589355469]]
//
//
//
// var i=13;
//
// var left = 490.018890380859;
// var right = 505.485076904296;
// var top = 439.680358886718;
// var bottom = 424.37060546875;
//
// var button_left = left - 21.74;
// var button_right = right + 73.58;
// var button_top = top + 4.49;
// var button_bottom = bottom - 2.70;
//
// var linkRect1 = [button_left,button_top,button_right,button_bottom];
// var lhLink = this.addLink(i, linkRect1);
// var destPage = (10);
//
// lhLink.setAction( "this.pageNum = " + destPage);
// lhLink.borderColor = color.red;
// lhLink.borderWidth = 1;
