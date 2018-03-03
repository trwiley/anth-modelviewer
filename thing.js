window.onload = function() {
    thingiurlbase = "javascripts";
    thingiview = new Thingiview("modelview");
    thingiview.setObjectColor('#C0D8F0');
    thingiview.initScene();
    thingiview.loadSTL("../models/QBERT.stl");
    thingiview.setRotation(false);

    var pane = document.getElementById("selectpane");
    var text = "<ul>";
    
    for(var i = 0; i < models.models.length; i++) {

      text = text + "<li id = " + i + " onclick = loadmodel(" + i + ")>" + models.models[i].name + "</li>";
    }

    text = text + "</ul>"

    pane.innerHTML = text;
  }

loadmodel = function(a) {

  thingiview.loadSTL(models.models[a].filepath);

  var infoPane = document.getElementById("infopane");
  var info = "<dl><dt>Name</dt><dd>" + models.models[a].name + "</dd><dt>Description</dt><dd>" + models.models[a].description + "</dd></dl>";

  infoPane.innerHTML = info;

}

