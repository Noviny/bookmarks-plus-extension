document.addEventListener('DOMContentLoaded', function () {
  $('#click-me').click( function () {
    event.preventDefault()
    searchFor = $('#search').val();

    // $.post('https://journal-maker-app.herokuapp.com/', searchFor)

    // chrome.bookmarks.search(searchFor, function (folder) {
    //   if ( folder ) {
    //     var folderID = folder[0].id;
    //     chrome.bookmarks.getChildren('453', function(result) {
    //       for (var i = 0; i < result.length; i++) {
    //         if ( result[i].url ) {
    //           console.log(result[i].title);
    //         } else {
    //           console.log("THIS WAS A FOLDER");
    //         }
    //       };
    //     });
    //   } else {
    //     window.alert("No such Folder");
    //   };
    // });
  });
});