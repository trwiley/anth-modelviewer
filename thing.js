window.onload = function() {
    thingiurlbase = "javascripts";
    thingiview = new Thingiview("modelview");
    thingiview.setObjectColor('#C0D8F0');
    thingiview.initScene();
    thingiview.loadSTL("../models/QBERT.stl");
    thingiview.setRotation(false);

    var pane = document.getElementById("selectpane");
    var text;
    
    for(var i = 0; i < models.models.length; + i++) {
      text = text + "<p>" + models.models[i].name + "</p><br />";
    }
    
    pane.innerHTML = text;
  }
