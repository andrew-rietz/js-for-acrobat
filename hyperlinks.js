



Function that takes in page number, quad coordinates, and destination page

// function create_link(link_from_page, coordinates, link_to_page){
//   var linkRect1 = [coordinates[0],coordinates[1],coordinates[2],coordinates[3]];
//   var lhLink = this.addLink(link_from_page, linkRect1);
//   var destPage = (0);
//
//   lhLink.setAction( "this.pageNum = " + link_to_page);
//   lhLink.borderColor = color.red;
//   lhLink.borderWidth = 1;
// }
//
// for(var i=0; i<(scl_links.length); i++)
// {
//   create_link(scl_links[i][1], scl_links[i][2], scl_links[i][3])
// }

// var scl_links =
// [
//   ["SEE THE DATA", 11, [1080.26,422.49,1190.58,400.29], 1],
//   ["SEE THE DATA", 11, [1080.26,55.49,1190.58,33.29], 1],
//   ["SEE THE DATA", 12, [1080.26,75.49,1190.58,52.29], 1],
//   ["SEE THE DATA", 12, [1080.26,493.49,1190.58,471.29], 1],
//   ["SEE THE DATA", 14, [1080.26,76.49,1190.58,54.29], 1],
//   ["SEE THE DATA", 14, [1073.26,389.49,1184.58,367.29], 1],
//   ["SEE THE DATA", 15, [1076.26,51.49,1186.58,29.29], 1],
//   ["SEE THE DATA", 15, [1076.26,389.49,1186.58,367.29], 1],
//   ["SEE THE DATA", 16, [467.26,45.49,577.58,23.29], 1],
//   ["SEE THE DATA", 16, [467.26,432.49,577.58,410.29], 1],
//   ["SEE THE DATA", 16, [1076.26,54.49,1186.58,32.29], 1],
//   ["SEE THE DATA", 16, [1076.26,432.49,1186.58,410.29], 1],
//   ["SEE THE DATA", 17, [1076.26,53.49,1186.58,31.29], 1],
//   ["SEE THE DATA", 17, [1076.26,458.49,1186.58,436.29], 1],
//   ["SEE THE DATA", 18, [1076.26,54.49,1186.58,32.29], 1],
//   ["SEE THE DATA", 19, [467.26,54.49,577.58,32.29], 1],
//   ["SEE THE DATA", 19, [468.26,424.49,579.58,402.29], 1],
//   ["SEE THE DATA", 19, [1080.26,68.49,1190.58,46.29], 1],
//   ["SEE THE DATA", 19, [1080.26,424.49,1190.58,402.29], 1],
//   ["SEE THE DATA", 20, [1076.26,67.49,1186.58,45.29], 1],
//   ["SEE THE DATA", 20, [1076.26,530.49,1186.58,508.29], 1],
//   ["SEE THE DATA", 21, [1076.26,79.49,1186.58,56.29], 1],
//   ["SEE THE DATA", 21, [1076.26,426.49,1186.58,404.29], 1],
//   ["SEE THE DATA", 21, [467.26,49.49,578.58,27.29], 1],
//   ["SEE THE DATA", 21, [467.26,426.49,578.58,404.29], 1],
//   ["SEE THE DATA", 22, [1080.26,412.49,1191.58,390.29], 1],
//   ["SEE THE DATA", 22, [1080.26,57.49,1191.58,35.29], 1],
//   ["SEE THE DATA", 23, [460.26,84.49,571.58,62.29], 1],
//   ["SEE THE DATA", 23, [468.26,444.49,578.58,421.29], 1],
//   ["SEE THE DATA", 24, [1076.26,516.49,1186.58,493.29], 1],
//   ["SEE THE DATA", 24, [1076.26,52.49,1186.58,30.29], 1],
//   ["SEE THE DATA", 25, [469.26,49.49,580.58,27.29], 1],
//   ["SEE THE DATA", 25, [467.26,422.49,577.58,400.29], 1],
//   ["SEE THE DATA", 25, [1080.26,640.49,1190.58,617.29], 1],
//   ["SEE THE DATA", 25, [1080.26,409.49,1190.58,387.29], 1],
//   ["SEE THE DATA", 26, [1080.26,66.49,1190.58,43.29], 1],
//   ["SEE THE DATA", 26, [1080.26,481.49,1190.58,459.29], 1],
//   ["SEE THE DATA", 27, [794.26,434.49,904.58,412.29], 1],
//   ["SEE THE DATA", 27, [1080.26,434.49,1190.58,412.29], 1],
//   ["SEE THE DATA", 27, [937.26,82.49,1047.58,60.29], 1],
//   ["SEE THE DATA", 28, [445.26,347.49,556.58,324.29], 1],
//   ["SEE THE DATA", 28, [445.26,92.49,556.58,70.29], 1],
//   ["SEE THE DATA", 28, [445.26,212.49,556.58,189.29], 1],
//   ["SEE THE DATA", 28, [469.26,486.49,580.58,464.29], 1],
//   ["BACK TO REPORT", 38, [323.26,395.49,443.58,372.29], 1],
//   ["BACK TO REPORT", 38, [323.26,111.49,443.58,89.29], 1],
//   ["BACK TO REPORT", 44, [323.26,178.49,443.58,155.29], 1],
//   ["BACK TO REPORT", 52, [323.26,136.49,443.58,114.29], 1],
//   ["BACK TO REPORT", 58, [323.26,395.49,443.58,373.29], 1],
//   ["BACK TO REPORT", 59, [323.26,256.49,443.58,233.29], 1],
//   ["BACK TO REPORT", 61, [323.26,269.49,443.58,247.29], 1],
//   ["BACK TO REPORT", 62, [323.26,344.49,443.58,321.29], 1],
//   ["BACK TO REPORT", 65, [323.26,167.49,443.58,145.29], 1],
//   ["BACK TO REPORT", 67, [323.26,282.49,443.58,260.29], 1],
//   ["BACK TO REPORT", 68, [323.26,390.49,443.58,368.29], 1],
//   ["BACK TO REPORT", 73, [323.26,332.49,443.58,310.29], 1],
//   ["BACK TO REPORT", 74, [323.26,228.49,443.58,205.29], 1],
//   ["BACK TO REPORT", 76, [323.26,213.49,443.58,191.29], 1],
//   ["BACK TO REPORT", 78, [323.26,437.49,443.58,414.29], 1],
//   ["BACK TO REPORT", 78, [323.26,246.49,443.58,224.29], 1],
//   ["BACK TO REPORT", 79, [323.26,421.49,443.58,399.29], 1],
//   ["BACK TO REPORT", 79, [323.26,219.49,443.58,197.29], 1],
//   ["BACK TO REPORT", 82, [323.26,344.49,443.58,321.29], 1],
//   ["BACK TO REPORT", 83, [323.26,410.49,443.58,388.29], 1],
//   ["BACK TO REPORT", 85, [323.26,364.49,443.58,341.29], 1],
//   ["BACK TO REPORT", 85, [323.26,142.49,443.58,120.29], 1],
//   ["BACK TO REPORT", 86, [323.26,333.49,443.58,310.29], 1],
//   ["BACK TO REPORT", 89, [323.26,105.49,443.58,83.29], 1],
//   ["BACK TO REPORT", 95, [323.26,224.49,443.58,202.29], 1],
//   ["BACK TO REPORT", 96, [323.26,178.49,443.58,156.29], 1],
//   ["BACK TO REPORT", 101, [323.26,376.49,443.58,353.29], 1],
//   ["BACK TO REPORT", 103, [323.26,349.49,443.58,327.29], 1],
//   ["BACK TO REPORT", 104, [323.26,349.49,443.58,327.29], 1],
//   ["BACK TO REPORT", 105, [323.26,317.49,443.58,295.29], 1],
//   ["BACK TO REPORT", 106, [323.26,348.49,443.58,326.29], 1],
//   ["BACK TO REPORT", 108, [323.26,244.49,443.58,222.29], 1],
//   ["BACK TO REPORT", 109, [323.26,244.49,443.58,222.29], 1],
//   ["BACK TO REPORT", 116, [323.26,193.49,443.58,171.29], 1],
//   ["BACK TO REPORT", 117, [323.26,437.49,443.58,414.29], 1],
//   ["BACK TO REPORT", 117, [323.26,230.49,443.58,208.29], 1],
//   ["BACK TO REPORT", 118, [323.26,421.49,443.58,399.29], 1],
//   ["BACK TO REPORT", 121, [323.26,399.49,443.58,376.29], 1],
//   ["BACK TO REPORT", 121, [323.26,152.49,443.58,129.29], 1],
//   ["BACK TO REPORT", 122, [323.26,399.49,443.58,376.29], 1],
//   ["BACK TO REPORT", 123, [323.26,425.49,443.58,403.29], 1],
//   ["BACK TO REPORT", 123, [323.26,223.49,443.58,201.29], 1],
//   ["BACK TO REPORT", 124, [323.26,437.49,443.58,414.29], 1],
//   ["BACK TO REPORT", 124, [323.26,246.49,443.58,224.29], 1],
//   ["BACK TO REPORT", 126, [323.26,410.49,443.58,388.29], 1],
//   ["BACK TO REPORT", 130, [323.26,255.49,443.58,233.29], 1],
// ]
//
// var pse_links = [
//   ["SEE THE DATA", 6, [417.26,493.49,521.58,477.29], 1],
//   ["SEE THE DATA", 13, [1080.26,440.49,1190.58,418.29], 1],
//   ["SEE THE DATA", 13, [1080.26,52.49,1190.58,30.29], 1],
//   ["SEE THE DATA", 14, [468.26,443.49,578.58,421.29], 1],
//   ["SEE THE DATA", 14, [468.26,77.49,578.58,55.29], 1],
//   ["SEE THE DATA", 14, [1080.26,304.49,1190.58,282.29], 1],
//   ["SEE THE DATA", 15, [1080.26,54.49,1190.58,32.29], 1],
//   ["SEE THE DATA", 15, [1080.26,415.49,1190.58,393.29], 1],
//   ["SEE THE DATA", 16, [1080.26,83.49,1190.58,61.29], 1],
//   ["SEE THE DATA", 16, [1080.26,441.49,1190.58,419.29], 1],
//   ["SEE THE DATA", 17, [468.26,396.49,579.58,373.29], 1],
//   ["SEE THE DATA", 17, [468.26,60.49,579.58,37.29], 1],
//   ["SEE THE DATA", 17, [1076.26,391.49,1186.58,368.29], 1],
//   ["SEE THE DATA", 18, [1079.26,71.49,1189.58,48.29], 1],
//   ["SEE THE DATA", 18, [1079.26,445.49,1189.58,423.29], 1],
//   ["SEE THE DATA", 19, [1080.26,70.49,1190.58,47.29], 1],
//   ["SEE THE DATA", 19, [1080.26,472.49,1190.58,450.29], 1],
//   ["SEE THE DATA", 20, [1080.26,89.49,1190.58,67.29], 1],
//   ["SEE THE DATA", 20, [1080.26,447.49,1190.58,424.29], 1],
//   ["SEE THE DATA", 22, [1079.26,67.49,1189.58,45.29], 1],
//   ["SEE THE DATA", 22, [1079.26,382.49,1189.58,360.29], 1],
//   ["SEE THE DATA", 23, [468.26,443.49,579.58,421.29], 1],
//   ["SEE THE DATA", 23, [468.26,49.49,579.58,27.29], 1],
//   ["SEE THE DATA", 23, [1079.26,375.49,1189.58,353.29], 1],
//   ["SEE THE DATA", 24, [1076.26,56.49,1186.58,33.29], 1],
//   ["SEE THE DATA", 24, [1080.26,488.49,1190.58,466.29], 1],
//   ["SEE THE DATA", 25, [1076.26,54.49,1186.58,32.29], 1],
//   ["SEE THE DATA", 26, [467.26,65.49,577.58,43.29], 1],
//   ["SEE THE DATA", 26, [468.26,436.49,579.58,414.29], 1],
//   ["SEE THE DATA", 27, [1076.26,99.49,1186.58,77.29], 1],
//   ["SEE THE DATA", 27, [1076.26,487.49,1186.58,465.29], 1],
//   ["SEE THE DATA", 28, [468.26,55.49,579.58,32.29], 1],
//   ["SEE THE DATA", 28, [468.26,420.49,579.58,398.29], 1],
//   ["SEE THE DATA", 28, [1076.26,437.49,1186.58,414.29], 1],
//   ["SEE THE DATA", 29, [1080.26,445.49,1191.58,423.29], 1],
//   ["SEE THE DATA", 29, [1080.26,60.49,1191.58,38.29], 1],
//   ["SEE THE DATA", 30, [1076.26,498.49,1186.58,476.29], 1],
//   ["SEE THE DATA", 30, [1076.26,93.49,1186.58,70.29], 1],
//   ["SEE THE DATA", 31, [467.26,592.49,577.58,569.29], 1],
//   ["SEE THE DATA", 31, [468.26,163.49,578.58,140.29], 1],
//   ["SEE THE DATA", 31, [468.26,398.49,578.58,376.29], 1],
//   ["BACK TO REPORT", 39, [333.39,357.09,469.40999999999997,335.67], 1],
//   ["BACK TO REPORT", 43, [333.39,424.09,469.40999999999997,402.67], 1],
//   ["BACK TO REPORT", 43, [333.39,137.09,469.40999999999997,114.67], 1],
//   ["BACK TO REPORT", 44, [333.39,315.09,469.40999999999997,293.67], 1],
//   ["BACK TO REPORT", 53, [333.39,405.09,469.40999999999997,383.67], 1],
//   ["BACK TO REPORT", 54, [333.39,247.09,469.40999999999997,225.67], 1],
//   ["BACK TO REPORT", 58, [333.39,357.09,469.40999999999997,335.67], 1],
//   ["BACK TO REPORT", 59, [333.39,341.09,469.40999999999997,319.67], 1],
//   ["BACK TO REPORT", 59, [333.39,117.09,469.40999999999997,94.67], 1],
//   ["BACK TO REPORT", 60, [333.39,346.09,469.40999999999997,324.67], 1],
//   ["BACK TO REPORT", 60, [333.39,110.09,469.40999999999997,88.67], 1],
//   ["BACK TO REPORT", 61, [333.39,288.09,469.40999999999997,265.67], 1],
//   ["BACK TO REPORT", 63, [333.39,373.09,469.40999999999997,351.67], 1],
//   ["BACK TO REPORT", 67, [333.39,268.09,469.40999999999997,245.67], 1],
//   ["BACK TO REPORT", 69, [333.39,420.09,469.40999999999997,398.67], 1],
//   ["BACK TO REPORT", 72, [333.39,109.09,469.40999999999997,87.67], 1],
//   ["BACK TO REPORT", 73, [333.39,393.09,469.40999999999997,371.67], 1],
//   ["BACK TO REPORT", 73, [333.39,141.09,469.40999999999997,119.67], 1],
//   ["BACK TO REPORT", 76, [333.39,420.09,469.40999999999997,398.67], 1],
//   ["BACK TO REPORT", 77, [333.39,420.09,469.40999999999997,398.67], 1],
//   ["BACK TO REPORT", 78, [333.39,278.09,469.40999999999997,256.67], 1],
//   ["BACK TO REPORT", 80, [333.39,350.09,469.40999999999997,327.67], 1],
//   ["BACK TO REPORT", 82, [333.39,200.09,469.40999999999997,177.67], 1],
//   ["BACK TO REPORT", 83, [333.39,341.09,469.40999999999997,319.67], 1],
//   ["BACK TO REPORT", 84, [333.39,263.09,469.40999999999997,240.67], 1],
//   ["BACK TO REPORT", 87, [333.39,425.09,469.40999999999997,403.67], 1],
//   ["BACK TO REPORT", 88, [333.39,236.09,469.40999999999997,214.67], 1],
//   ["BACK TO REPORT", 89, [333.39,137.09,469.40999999999997,114.67], 1],
//   ["BACK TO REPORT", 90, [333.39,156.09,469.40999999999997,134.67], 1],
//   ["BACK TO REPORT", 92, [333.39,436.09,469.40999999999997,414.67], 1],
//   ["BACK TO REPORT", 94, [333.39,283.09,469.40999999999997,261.67], 1],
//   ["BACK TO REPORT", 95, [333.39,425.09,469.40999999999997,403.67], 1],
//   ["BACK TO REPORT", 95, [333.39,216.09,469.40999999999997,194.67], 1],
//   ["BACK TO REPORT", 97, [333.39,409.09,469.40999999999997,387.67], 1],
//   ["BACK TO REPORT", 98, [333.39,357.09,469.40999999999997,335.67], 1],
//   ["BACK TO REPORT", 98, [333.39,101.09,469.40999999999997,79.67], 1],
//   ["BACK TO REPORT", 100, [333.39,412.09,469.40999999999997,389.67], 1],
//   ["BACK TO REPORT", 103, [333.39,420.09,469.40999999999997,398.67], 1],
// ]
