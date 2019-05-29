//https://acrobatusers.com/tutorials/auto_redaction_with_javascript
//https://acrobatusers.com/tutorials/auto_placement_annotations
//https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/Acro6JS.pdf

var p=13;

{

var numWords = this.getPageNumWords(p);

  for (var i=0; i<(numWords-2); i++)
  {

  var ckWord1 = this.getPageNthWord(p, i, true);
  var ckWord2 = this.getPageNthWord(p, i+1, true);
  var ckWord3 = this.getPageNthWord(p, i+2, true);

    if ( ckWord1 + ckWord2 + ckWord3 == "SEETHEDATA")
    {
      var q = this.getPageNthWordQuads(p, i);
      var a = q.toString();
      var b = new Array();

      b = a.split(",");

      var left= b[0];
      var right= b[6]
      var top= b[1];
      var bottom= b[7];

      var button_left = parseInt(left) - 21.74;
      var button_right = parseInt(right) + 73.58;
      var button_top = parseInt(top) + 4.49;
      var button_bottom = parseInt(bottom) - 2.7

    /*
      console.println(button_left)
      console.println(button_right)
      console.println(button_top)
      console.println(button_bottom)
    */

      var linkRect1 = [button_left,button_top,button_right,button_bottom];
      var lhLink = this.addLink(p, linkRect1);
      var destPage = (0);

      lhLink.setAction( "this.pageNum = " + destPage);
      lhLink.borderColor = color.red;
      lhLink.borderWidth = 1;

    }
  }
}
