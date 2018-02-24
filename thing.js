window.onload = function() {
    thingiurlbase = "javascripts";
    thingiview = new Thingiview("modelview");
    thingiview.setObjectColor('#C0D8F0');
    thingiview.initScene();
    thingiview.loadSTL("../models/QBERT.stl");
    thingiview.setRotation(false);
  }