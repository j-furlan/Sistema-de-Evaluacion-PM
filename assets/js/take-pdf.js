function getPDF() 
{
    html2canvas(document.getElementById("toPDF"),{
    onrendered:function(canvas){
 
    var img=canvas.toDataURL("image/png");
    var doc = new jsPDF('l', 'cm'); // l = horizontal , p = vertical | cm = centimetros , mm = milimetros
    doc.addImage(img,'PNG',2,2); //espacions en x , y | PNG formato en que capturara el contenido 
    doc.save('reporte.pdf'); //nombre que se le dara al archivo
    }
    });
}

    /*var doc = new jsPDF();
   
    // We'll make our own renderer to skip this editor
    var specialElementHandlers = {
      '#getPDF': function(element, renderer){
        return true;
      },
      '.controls': function(element, renderer){
        return true;
      }
    };
  
    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML($('.zima').get(0), 15, 15, {
      'width': 170, 
      'elementHandlers': specialElementHandlers
    });
  
    doc.save('Generated.pdf');*/
  