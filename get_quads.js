Go through the merged PDF and find instances of "SEE THE DATA" and "BACK TO REPORT"
Generate a list of page numbers and the bounding coordinates for each box

for (var p = 3; p < this.numPages; p++){
  if(p<31 || p>36){
    var b = this.getPageBox("Crop", p);
    this.removeLinks(p, b);
  }
}


for (var p=0; p<(this.numPages); p++)
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
      var a = q.toString().split(",");
      var button_left = parseInt(a[0]) - 21.74;
      var button_right = parseInt(a[6]) + 73.58;
      var button_top = parseInt(a[1]) + 4.49;
      var button_bottom = parseInt(a[7]) - 2.71

      var result = (
        "[SEE THE DATA, " + (p+1).toString() + ", [" +
        [
          button_left.toString(),
          button_top.toString(),
          button_right.toString(),
          button_bottom.toString()
        ].toString() + "], link_to_page],"
      )
      console.println(result)
    }

    if ( ckWord1 + ckWord2 + ckWord3 == "BACKTOREPORT")
    {
      var q = this.getPageNthWordQuads(p, i);
      var a = q.toString().split(",");
      var button_left = parseInt(a[0]) - 21.74;
      var button_right = parseInt(a[6]) + 73.58;
      var button_top = parseInt(a[1]) + 4.49;
      var button_bottom = parseInt(a[7]) - 2.71

      var result = (
        "[BACK TO REPORT, " + (p+1).toString() + ", [" +
        [
          button_left.toString(),
          button_top.toString(),
          button_right.toString(),
          button_bottom.toString()
        ].toString() + "], link_to_page],"
      )
      console.println(result)
    }
  }
}


********************************
********** SCL OUTPUT **********
********************************
[SEE THE DATA, 6, [417.26,442.49,521.58,426.29], link_to_page],
[SEE THE DATA, 11, [1080.26,422.49,1190.58,400.29], link_to_page],
[SEE THE DATA, 11, [1080.26,55.49,1190.58,33.29], link_to_page],
[SEE THE DATA, 12, [1080.26,75.49,1190.58,52.29], link_to_page],
[SEE THE DATA, 12, [1080.26,493.49,1190.58,471.29], link_to_page],
[SEE THE DATA, 14, [1080.26,76.49,1190.58,54.29], link_to_page],
[SEE THE DATA, 14, [1073.26,389.49,1184.58,367.29], link_to_page],
[SEE THE DATA, 15, [1076.26,51.49,1186.58,29.29], link_to_page],
[SEE THE DATA, 15, [1076.26,389.49,1186.58,367.29], link_to_page],
[SEE THE DATA, 16, [467.26,45.49,577.58,23.29], link_to_page],
[SEE THE DATA, 16, [467.26,432.49,577.58,410.29], link_to_page],
[SEE THE DATA, 16, [1076.26,54.49,1186.58,32.29], link_to_page],
[SEE THE DATA, 16, [1076.26,432.49,1186.58,410.29], link_to_page],
[SEE THE DATA, 17, [1076.26,53.49,1186.58,31.29], link_to_page],
[SEE THE DATA, 17, [1076.26,458.49,1186.58,436.29], link_to_page],
[SEE THE DATA, 18, [1076.26,54.49,1186.58,32.29], link_to_page],
[SEE THE DATA, 19, [467.26,54.49,577.58,32.29], link_to_page],
[SEE THE DATA, 19, [468.26,424.49,579.58,402.29], link_to_page],
[SEE THE DATA, 19, [1080.26,68.49,1190.58,46.29], link_to_page],
[SEE THE DATA, 19, [1080.26,424.49,1190.58,402.29], link_to_page],
[SEE THE DATA, 20, [1076.26,67.49,1186.58,45.29], link_to_page],
[SEE THE DATA, 20, [1076.26,530.49,1186.58,508.29], link_to_page],
[SEE THE DATA, 21, [1076.26,79.49,1186.58,56.29], link_to_page],
[SEE THE DATA, 21, [1076.26,426.49,1186.58,404.29], link_to_page],
[SEE THE DATA, 21, [467.26,49.49,578.58,27.29], link_to_page],
[SEE THE DATA, 21, [467.26,426.49,578.58,404.29], link_to_page],
[SEE THE DATA, 22, [1080.26,412.49,1191.58,390.29], link_to_page],
[SEE THE DATA, 22, [1080.26,57.49,1191.58,35.29], link_to_page],
[SEE THE DATA, 23, [460.26,84.49,571.58,62.29], link_to_page],
[SEE THE DATA, 23, [468.26,444.49,578.58,421.29], link_to_page],
[SEE THE DATA, 24, [1076.26,516.49,1186.58,493.29], link_to_page],
[SEE THE DATA, 24, [1076.26,52.49,1186.58,30.29], link_to_page],
[SEE THE DATA, 25, [469.26,49.49,580.58,27.29], link_to_page],
[SEE THE DATA, 25, [467.26,422.49,577.58,400.29], link_to_page],
[SEE THE DATA, 25, [1080.26,640.49,1190.58,617.29], link_to_page],
[SEE THE DATA, 25, [1080.26,409.49,1190.58,387.29], link_to_page],
[SEE THE DATA, 26, [1080.26,66.49,1190.58,43.29], link_to_page],
[SEE THE DATA, 26, [1080.26,481.49,1190.58,459.29], link_to_page],
[SEE THE DATA, 27, [794.26,434.49,904.58,412.29], link_to_page],
[SEE THE DATA, 27, [1080.26,434.49,1190.58,412.29], link_to_page],
[SEE THE DATA, 27, [937.26,82.49,1047.58,60.29], link_to_page],
[SEE THE DATA, 28, [445.26,347.49,556.58,324.29], link_to_page],
[SEE THE DATA, 28, [445.26,92.49,556.58,70.29], link_to_page],
[SEE THE DATA, 28, [445.26,212.49,556.58,189.29], link_to_page],
[SEE THE DATA, 28, [469.26,486.49,580.58,464.29], link_to_page],
[BACK TO REPORT, 38, [323.26,395.49,443.58,372.29], link_to_page],
[BACK TO REPORT, 38, [323.26,111.49,443.58,89.29], link_to_page],
[BACK TO REPORT, 44, [323.26,178.49,443.58,155.29], link_to_page],
[BACK TO REPORT, 52, [323.26,136.49,443.58,114.29], link_to_page],
[BACK TO REPORT, 58, [323.26,395.49,443.58,373.29], link_to_page],
[BACK TO REPORT, 59, [323.26,256.49,443.58,233.29], link_to_page],
[BACK TO REPORT, 61, [323.26,269.49,443.58,247.29], link_to_page],
[BACK TO REPORT, 62, [323.26,344.49,443.58,321.29], link_to_page],
[BACK TO REPORT, 65, [323.26,167.49,443.58,145.29], link_to_page],
[BACK TO REPORT, 67, [323.26,282.49,443.58,260.29], link_to_page],
[BACK TO REPORT, 68, [323.26,390.49,443.58,368.29], link_to_page],
[BACK TO REPORT, 73, [323.26,332.49,443.58,310.29], link_to_page],
[BACK TO REPORT, 74, [323.26,228.49,443.58,205.29], link_to_page],
[BACK TO REPORT, 76, [323.26,213.49,443.58,191.29], link_to_page],
[BACK TO REPORT, 78, [323.26,437.49,443.58,414.29], link_to_page],
[BACK TO REPORT, 78, [323.26,246.49,443.58,224.29], link_to_page],
[BACK TO REPORT, 79, [323.26,421.49,443.58,399.29], link_to_page],
[BACK TO REPORT, 79, [323.26,219.49,443.58,197.29], link_to_page],
[BACK TO REPORT, 82, [323.26,344.49,443.58,321.29], link_to_page],
[BACK TO REPORT, 83, [323.26,410.49,443.58,388.29], link_to_page],
[BACK TO REPORT, 85, [323.26,364.49,443.58,341.29], link_to_page],
[BACK TO REPORT, 85, [323.26,142.49,443.58,120.29], link_to_page],
[BACK TO REPORT, 86, [323.26,333.49,443.58,310.29], link_to_page],
[BACK TO REPORT, 89, [323.26,105.49,443.58,83.29], link_to_page],
[BACK TO REPORT, 95, [323.26,224.49,443.58,202.29], link_to_page],
[BACK TO REPORT, 96, [323.26,178.49,443.58,156.29], link_to_page],
[BACK TO REPORT, 101, [323.26,376.49,443.58,353.29], link_to_page],
[BACK TO REPORT, 103, [323.26,349.49,443.58,327.29], link_to_page],
[BACK TO REPORT, 104, [323.26,349.49,443.58,327.29], link_to_page],
[BACK TO REPORT, 105, [323.26,317.49,443.58,295.29], link_to_page],
[BACK TO REPORT, 106, [323.26,348.49,443.58,326.29], link_to_page],
[BACK TO REPORT, 108, [323.26,244.49,443.58,222.29], link_to_page],
[BACK TO REPORT, 109, [323.26,244.49,443.58,222.29], link_to_page],
[BACK TO REPORT, 116, [323.26,193.49,443.58,171.29], link_to_page],
[BACK TO REPORT, 117, [323.26,437.49,443.58,414.29], link_to_page],
[BACK TO REPORT, 117, [323.26,230.49,443.58,208.29], link_to_page],
[BACK TO REPORT, 118, [323.26,421.49,443.58,399.29], link_to_page],
[BACK TO REPORT, 121, [323.26,399.49,443.58,376.29], link_to_page],
[BACK TO REPORT, 121, [323.26,152.49,443.58,129.29], link_to_page],
[BACK TO REPORT, 122, [323.26,399.49,443.58,376.29], link_to_page],
[BACK TO REPORT, 123, [323.26,425.49,443.58,403.29], link_to_page],
[BACK TO REPORT, 123, [323.26,223.49,443.58,201.29], link_to_page],
[BACK TO REPORT, 124, [323.26,437.49,443.58,414.29], link_to_page],
[BACK TO REPORT, 124, [323.26,246.49,443.58,224.29], link_to_page],
[BACK TO REPORT, 126, [323.26,410.49,443.58,388.29], link_to_page],
[BACK TO REPORT, 130, [323.26,255.49,443.58,233.29], link_to_page],
