Go through the merged PDF and find instances of "SEE THE DATA" and "BACK TO REPORT"
Generate a list of page numbers and the bounding coordinates for each box

********************************
********** SCL OUTPUT **********
********************************

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
        "[\"SEE THE DATA\", " + (p+1).toString() + ", [" +
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
      var button_left = parseInt(a[0]) - 11.61;
      var button_right = parseInt(a[6]) + 99.41;
      var button_top = parseInt(a[1]) + 6.09;
      var button_bottom = parseInt(a[7]) - 6.09;

      var result = (
        "[\"BACK TO REPORT\", " + (p+1).toString() + ", [" +
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
["SEE THE DATA", 6, [417.26,442.49,521.58,426.29], link_to_page],
["SEE THE DATA", 11, [1080.26,422.49,1190.58,400.29], link_to_page],
["SEE THE DATA", 11, [1080.26,55.49,1190.58,33.29], link_to_page],
["SEE THE DATA", 12, [1080.26,75.49,1190.58,52.29], link_to_page],
["SEE THE DATA", 12, [1080.26,493.49,1190.58,471.29], link_to_page],
["SEE THE DATA", 14, [1080.26,76.49,1190.58,54.29], link_to_page],
["SEE THE DATA", 14, [1073.26,389.49,1184.58,367.29], link_to_page],
["SEE THE DATA", 15, [1076.26,51.49,1186.58,29.29], link_to_page],
["SEE THE DATA", 15, [1076.26,389.49,1186.58,367.29], link_to_page],
["SEE THE DATA", 16, [467.26,45.49,577.58,23.29], link_to_page],
["SEE THE DATA", 16, [467.26,432.49,577.58,410.29], link_to_page],
["SEE THE DATA", 16, [1076.26,54.49,1186.58,32.29], link_to_page],
["SEE THE DATA", 16, [1076.26,432.49,1186.58,410.29], link_to_page],
["SEE THE DATA", 17, [1076.26,53.49,1186.58,31.29], link_to_page],
["SEE THE DATA", 17, [1076.26,458.49,1186.58,436.29], link_to_page],
["SEE THE DATA", 18, [1076.26,54.49,1186.58,32.29], link_to_page],
["SEE THE DATA", 19, [467.26,54.49,577.58,32.29], link_to_page],
["SEE THE DATA", 19, [468.26,424.49,579.58,402.29], link_to_page],
["SEE THE DATA", 19, [1080.26,68.49,1190.58,46.29], link_to_page],
["SEE THE DATA", 19, [1080.26,424.49,1190.58,402.29], link_to_page],
["SEE THE DATA", 20, [1076.26,67.49,1186.58,45.29], link_to_page],
["SEE THE DATA", 20, [1076.26,530.49,1186.58,508.29], link_to_page],
["SEE THE DATA", 21, [1076.26,79.49,1186.58,56.29], link_to_page],
["SEE THE DATA", 21, [1076.26,426.49,1186.58,404.29], link_to_page],
["SEE THE DATA", 21, [467.26,49.49,578.58,27.29], link_to_page],
["SEE THE DATA", 21, [467.26,426.49,578.58,404.29], link_to_page],
["SEE THE DATA", 22, [1080.26,412.49,1191.58,390.29], link_to_page],
["SEE THE DATA", 22, [1080.26,57.49,1191.58,35.29], link_to_page],
["SEE THE DATA", 23, [460.26,84.49,571.58,62.29], link_to_page],
["SEE THE DATA", 23, [468.26,444.49,578.58,421.29], link_to_page],
["SEE THE DATA", 24, [1076.26,516.49,1186.58,493.29], link_to_page],
["SEE THE DATA", 24, [1076.26,52.49,1186.58,30.29], link_to_page],
["SEE THE DATA", 25, [469.26,49.49,580.58,27.29], link_to_page],
["SEE THE DATA", 25, [467.26,422.49,577.58,400.29], link_to_page],
["SEE THE DATA", 25, [1080.26,640.49,1190.58,617.29], link_to_page],
["SEE THE DATA", 25, [1080.26,409.49,1190.58,387.29], link_to_page],
["SEE THE DATA", 26, [1080.26,66.49,1190.58,43.29], link_to_page],
["SEE THE DATA", 26, [1080.26,481.49,1190.58,459.29], link_to_page],
["SEE THE DATA", 27, [794.26,434.49,904.58,412.29], link_to_page],
["SEE THE DATA", 27, [1080.26,434.49,1190.58,412.29], link_to_page],
["SEE THE DATA", 27, [937.26,82.49,1047.58,60.29], link_to_page],
["SEE THE DATA", 28, [445.26,347.49,556.58,324.29], link_to_page],
["SEE THE DATA", 28, [445.26,92.49,556.58,70.29], link_to_page],
["SEE THE DATA", 28, [445.26,212.49,556.58,189.29], link_to_page],
["SEE THE DATA", 28, [469.26,486.49,580.58,464.29], link_to_page],
["BACK TO REPORT", 38, [333.39,397.09,469.40999999999997,368.91], link_to_page],
["BACK TO REPORT", 38, [333.39,113.09,469.40999999999997,85.91], link_to_page],
["BACK TO REPORT", 44, [333.39,180.09,469.40999999999997,151.91], link_to_page],
["BACK TO REPORT", 52, [333.39,138.09,469.40999999999997,110.91], link_to_page],
["BACK TO REPORT", 58, [333.39,397.09,469.40999999999997,369.91], link_to_page],
["BACK TO REPORT", 59, [333.39,258.09,469.40999999999997,229.91], link_to_page],
["BACK TO REPORT", 61, [333.39,271.09,469.40999999999997,243.91], link_to_page],
["BACK TO REPORT", 62, [333.39,346.09,469.40999999999997,317.91], link_to_page],
["BACK TO REPORT", 65, [333.39,169.09,469.40999999999997,141.91], link_to_page],
["BACK TO REPORT", 67, [333.39,284.09,469.40999999999997,256.91], link_to_page],
["BACK TO REPORT", 68, [333.39,392.09,469.40999999999997,364.91], link_to_page],
["BACK TO REPORT", 73, [333.39,334.09,469.40999999999997,306.91], link_to_page],
["BACK TO REPORT", 74, [333.39,230.09,469.40999999999997,201.91], link_to_page],
["BACK TO REPORT", 76, [333.39,215.09,469.40999999999997,187.91], link_to_page],
["BACK TO REPORT", 78, [333.39,439.09,469.40999999999997,410.91], link_to_page],
["BACK TO REPORT", 78, [333.39,248.09,469.40999999999997,220.91], link_to_page],
["BACK TO REPORT", 79, [333.39,423.09,469.40999999999997,395.91], link_to_page],
["BACK TO REPORT", 79, [333.39,221.09,469.40999999999997,193.91], link_to_page],
["BACK TO REPORT", 82, [333.39,346.09,469.40999999999997,317.91], link_to_page],
["BACK TO REPORT", 83, [333.39,412.09,469.40999999999997,384.91], link_to_page],
["BACK TO REPORT", 85, [333.39,366.09,469.40999999999997,337.91], link_to_page],
["BACK TO REPORT", 85, [333.39,144.09,469.40999999999997,116.91], link_to_page],
["BACK TO REPORT", 86, [333.39,335.09,469.40999999999997,306.91], link_to_page],
["BACK TO REPORT", 89, [333.39,107.09,469.40999999999997,79.91], link_to_page],
["BACK TO REPORT", 95, [333.39,226.09,469.40999999999997,198.91], link_to_page],
["BACK TO REPORT", 96, [333.39,180.09,469.40999999999997,152.91], link_to_page],
["BACK TO REPORT", 101, [333.39,378.09,469.40999999999997,349.91], link_to_page],
["BACK TO REPORT", 103, [333.39,351.09,469.40999999999997,323.91], link_to_page],
["BACK TO REPORT", 104, [333.39,351.09,469.40999999999997,323.91], link_to_page],
["BACK TO REPORT", 105, [333.39,319.09,469.40999999999997,291.91], link_to_page],
["BACK TO REPORT", 106, [333.39,350.09,469.40999999999997,322.91], link_to_page],
["BACK TO REPORT", 108, [333.39,246.09,469.40999999999997,218.91], link_to_page],
["BACK TO REPORT", 109, [333.39,246.09,469.40999999999997,218.91], link_to_page],
["BACK TO REPORT", 116, [333.39,195.09,469.40999999999997,167.91], link_to_page],
["BACK TO REPORT", 117, [333.39,439.09,469.40999999999997,410.91], link_to_page],
["BACK TO REPORT", 117, [333.39,232.09,469.40999999999997,204.91], link_to_page],
["BACK TO REPORT", 118, [333.39,423.09,469.40999999999997,395.91], link_to_page],
["BACK TO REPORT", 121, [333.39,401.09,469.40999999999997,372.91], link_to_page],
["BACK TO REPORT", 121, [333.39,154.09,469.40999999999997,125.91], link_to_page],
["BACK TO REPORT", 122, [333.39,401.09,469.40999999999997,372.91], link_to_page],
["BACK TO REPORT", 123, [333.39,427.09,469.40999999999997,399.91], link_to_page],
["BACK TO REPORT", 123, [333.39,225.09,469.40999999999997,197.91], link_to_page],
["BACK TO REPORT", 124, [333.39,439.09,469.40999999999997,410.91], link_to_page],
["BACK TO REPORT", 124, [333.39,248.09,469.40999999999997,220.91], link_to_page],
["BACK TO REPORT", 126, [333.39,412.09,469.40999999999997,384.91], link_to_page],
["BACK TO REPORT", 130, [333.39,257.09,469.40999999999997,229.91], link_to_page],











***********************************************************************
***********************************************************************
***********************************************************************
***********************************************************************







for (var p = 3; p < this.numPages; p++){
  if(p<34 || p>37){
    var b = this.getPageBox("Crop", p);
    this.removeLinks(p, b);
  }
}


********************************
********** PSE OUTPUT **********
********************************
["SEE THE DATA", 6, [417.26,493.49,521.58,477.29], link_to_page],
["SEE THE DATA", 13, [1080.26,440.49,1190.58,418.29], link_to_page],
["SEE THE DATA", 13, [1080.26,52.49,1190.58,30.29], link_to_page],
["SEE THE DATA", 14, [468.26,443.49,578.58,421.29], link_to_page],
["SEE THE DATA", 14, [468.26,77.49,578.58,55.29], link_to_page],
["SEE THE DATA", 14, [1080.26,304.49,1190.58,282.29], link_to_page],
["SEE THE DATA", 15, [1080.26,54.49,1190.58,32.29], link_to_page],
["SEE THE DATA", 15, [1080.26,415.49,1190.58,393.29], link_to_page],
["SEE THE DATA", 16, [1080.26,83.49,1190.58,61.29], link_to_page],
["SEE THE DATA", 16, [1080.26,441.49,1190.58,419.29], link_to_page],
["SEE THE DATA", 17, [468.26,396.49,579.58,373.29], link_to_page],
["SEE THE DATA", 17, [468.26,60.49,579.58,37.29], link_to_page],
["SEE THE DATA", 17, [1076.26,391.49,1186.58,368.29], link_to_page],
["SEE THE DATA", 18, [1079.26,71.49,1189.58,48.29], link_to_page],
["SEE THE DATA", 18, [1079.26,445.49,1189.58,423.29], link_to_page],
["SEE THE DATA", 19, [1080.26,70.49,1190.58,47.29], link_to_page],
["SEE THE DATA", 19, [1080.26,472.49,1190.58,450.29], link_to_page],
["SEE THE DATA", 20, [1080.26,89.49,1190.58,67.29], link_to_page],
["SEE THE DATA", 20, [1080.26,447.49,1190.58,424.29], link_to_page],
["SEE THE DATA", 22, [1079.26,67.49,1189.58,45.29], link_to_page],
["SEE THE DATA", 22, [1079.26,382.49,1189.58,360.29], link_to_page],
["SEE THE DATA", 23, [468.26,443.49,579.58,421.29], link_to_page],
["SEE THE DATA", 23, [468.26,49.49,579.58,27.29], link_to_page],
["SEE THE DATA", 23, [1079.26,375.49,1189.58,353.29], link_to_page],
["SEE THE DATA", 24, [1076.26,56.49,1186.58,33.29], link_to_page],
["SEE THE DATA", 24, [1080.26,488.49,1190.58,466.29], link_to_page],
["SEE THE DATA", 25, [1076.26,54.49,1186.58,32.29], link_to_page],
["SEE THE DATA", 26, [467.26,65.49,577.58,43.29], link_to_page],
["SEE THE DATA", 26, [468.26,436.49,579.58,414.29], link_to_page],
["SEE THE DATA", 27, [1076.26,99.49,1186.58,77.29], link_to_page],
["SEE THE DATA", 27, [1076.26,487.49,1186.58,465.29], link_to_page],
["SEE THE DATA", 28, [468.26,55.49,579.58,32.29], link_to_page],
["SEE THE DATA", 28, [468.26,420.49,579.58,398.29], link_to_page],
["SEE THE DATA", 28, [1076.26,437.49,1186.58,414.29], link_to_page],
["SEE THE DATA", 29, [1080.26,445.49,1191.58,423.29], link_to_page],
["SEE THE DATA", 29, [1080.26,60.49,1191.58,38.29], link_to_page],
["SEE THE DATA", 30, [1076.26,498.49,1186.58,476.29], link_to_page],
["SEE THE DATA", 30, [1076.26,93.49,1186.58,70.29], link_to_page],
["SEE THE DATA", 31, [467.26,592.49,577.58,569.29], link_to_page],
["SEE THE DATA", 31, [468.26,163.49,578.58,140.29], link_to_page],
["SEE THE DATA", 31, [468.26,398.49,578.58,376.29], link_to_page],
["BACK TO REPORT", 39, [333.39,357.09,469.40999999999997,329.91], link_to_page],
["BACK TO REPORT", 43, [333.39,424.09,469.40999999999997,396.91], link_to_page],
["BACK TO REPORT", 43, [333.39,137.09,469.40999999999997,108.91], link_to_page],
["BACK TO REPORT", 44, [333.39,315.09,469.40999999999997,287.91], link_to_page],
["BACK TO REPORT", 53, [333.39,405.09,469.40999999999997,377.91], link_to_page],
["BACK TO REPORT", 54, [333.39,247.09,469.40999999999997,219.91], link_to_page],
["BACK TO REPORT", 58, [333.39,357.09,469.40999999999997,329.91], link_to_page],
["BACK TO REPORT", 59, [333.39,341.09,469.40999999999997,313.91], link_to_page],
["BACK TO REPORT", 59, [333.39,117.09,469.40999999999997,88.91], link_to_page],
["BACK TO REPORT", 60, [333.39,346.09,469.40999999999997,318.91], link_to_page],
["BACK TO REPORT", 60, [333.39,110.09,469.40999999999997,82.91], link_to_page],
["BACK TO REPORT", 61, [333.39,288.09,469.40999999999997,259.91], link_to_page],
["BACK TO REPORT", 63, [333.39,373.09,469.40999999999997,345.91], link_to_page],
["BACK TO REPORT", 67, [333.39,268.09,469.40999999999997,239.91], link_to_page],
["BACK TO REPORT", 69, [333.39,420.09,469.40999999999997,392.91], link_to_page],
["BACK TO REPORT", 72, [333.39,109.09,469.40999999999997,81.91], link_to_page],
["BACK TO REPORT", 73, [333.39,393.09,469.40999999999997,365.91], link_to_page],
["BACK TO REPORT", 73, [333.39,141.09,469.40999999999997,113.91], link_to_page],
["BACK TO REPORT", 76, [333.39,420.09,469.40999999999997,392.91], link_to_page],
["BACK TO REPORT", 77, [333.39,420.09,469.40999999999997,392.91], link_to_page],
["BACK TO REPORT", 78, [333.39,278.09,469.40999999999997,250.91], link_to_page],
["BACK TO REPORT", 80, [333.39,350.09,469.40999999999997,321.91], link_to_page],
["BACK TO REPORT", 82, [333.39,200.09,469.40999999999997,171.91], link_to_page],
["BACK TO REPORT", 83, [333.39,341.09,469.40999999999997,313.91], link_to_page],
["BACK TO REPORT", 84, [333.39,263.09,469.40999999999997,234.91], link_to_page],
["BACK TO REPORT", 87, [333.39,425.09,469.40999999999997,397.91], link_to_page],
["BACK TO REPORT", 88, [333.39,236.09,469.40999999999997,208.91], link_to_page],
["BACK TO REPORT", 89, [333.39,137.09,469.40999999999997,108.91], link_to_page],
["BACK TO REPORT", 90, [333.39,156.09,469.40999999999997,128.91], link_to_page],
["BACK TO REPORT", 92, [333.39,436.09,469.40999999999997,408.91], link_to_page],
["BACK TO REPORT", 94, [333.39,283.09,469.40999999999997,255.91], link_to_page],
["BACK TO REPORT", 95, [333.39,425.09,469.40999999999997,397.91], link_to_page],
["BACK TO REPORT", 95, [333.39,216.09,469.40999999999997,188.91], link_to_page],
["BACK TO REPORT", 97, [333.39,409.09,469.40999999999997,381.91], link_to_page],
["BACK TO REPORT", 98, [333.39,357.09,469.40999999999997,329.91], link_to_page],
["BACK TO REPORT", 98, [333.39,101.09,469.40999999999997,73.91], link_to_page],
["BACK TO REPORT", 100, [333.39,412.09,469.40999999999997,383.91], link_to_page],
["BACK TO REPORT", 103, [333.39,420.09,469.40999999999997,392.91], link_to_page],
