$(document).ready(function() {
   $("#file").change(function () 
   { 
     var iSize = ($("#file")[0].files[0].size / 1024); 
     if (iSize * 1024 * 1024 > 40 * 1024 * 1024) 
     { 
        iSize = (Math.round(iSize))
        alert(('This file is over the 40MB limit, try another one.'));
        location.reload();
     } 
     else 
     {
        iSize = (Math.round(iSize))
     }    
  }); 
});
