(function(){

//localStorage.clear();
init();
function init(){
    resetForm()
    $("button").removeAttr('disabled');

    // get/set initial local storage data
    var getReserved = JSON.parse(localStorage.getItem('reserved'));
    var getViewer = JSON.parse(localStorage.getItem('user'));
    if(getReserved === null) {
        localStorage.setItem('reserved', JSON.stringify([]));
    }
    if(getViewer === null) {
        localStorage.setItem('user', JSON.stringify([]));
    }
}

//Reset all form elements
function resetForm(){
    $("input[type='text']").removeAttr('disabled').val('');
    $("input[type='number']").removeAttr('disabled').val('');
    $("#select_seats").removeAttr('disabled');
}



var qty = 0,
    counter = 0,
    username = '',
    location = [];

//Click event for Select seats button
$('#select_seats').on('click', function(){

    username = $('#name').val();
    qty = $('#seat').val();

    if(username && qty) {
        // reset
        $('input:checkbox').removeAttr('checked');
        $('#confirm').removeAttr('disabled');
        location.length = 0; //empty location array for new user
        $('.layout').slideDown(function(){
            $('.user_input input').attr('disabled', 'true');
            $('#select_seats').attr('disabled', 'true');
            setSelected();
        });
    }

})

//Select-deselect of seats
$('input:checkbox').on('click', function(e){
    counter = $('input[type="checkbox"]:checked').length;
    if(counter > qty) {
        return false;
    }
    
})

//confirm button action
$('#confirm').on('click', function(){
    if(counter < qty) {
        alert("Select "+(qty-counter)+" more seat");
    }
    else {

        $(this).attr('disabled', 'true')

        seatLocation();
        storeUser();
        addUser();
        resetForm();
    }

})

// Updating local storage reserved seats value
function seatLocation() {

    var booked = JSON.parse(localStorage.getItem('reserved'));
    
    $('input[type="checkbox"]:checked').each(function(i){
        var rowIndex = $(this).parents('li').index();
        var rowText = $(this).parents('li').first().text().trim();
        var col = ($(this).parents('label').index())-1;

        location.push(rowText+(col+1)); //adding Seat location

        if(booked[rowIndex] && booked[rowIndex] !== null) {
            booked[rowIndex].push(col)
        }
        else{
            booked[rowIndex] = [];
            booked[rowIndex].push(col)
        }
    })
    localStorage.setItem('reserved', JSON.stringify(booked));
}

//Already booked seats
function setSelected() {
    var alreadySelected = JSON.parse(localStorage.getItem('reserved'));

    if(alreadySelected.length > 0) {

        $('#seats > li').each(function(i){

            if(alreadySelected[i] !== null && alreadySelected[i] !== undefined){

                for (var j = 0, len = alreadySelected[i].length; j<len; j++){

                    var allSeats = $(this).children('label').eq(alreadySelected[i][j]).children('input');
                    allSeats.attr('disabled', 'true');
                }

            }            
        })
    }
}

//User
function User(name, quantity, position) {
    this.name = name;
    this.quantity = quantity;
    this.positions = position;
}

// Store User to storage
function storeUser() {
    var newUser = new User(username, qty, location)
    var getUsers = JSON.parse(localStorage.getItem('user'));

    if(getUsers === undefined && getUsers === null) {
        getUsers = [];
        getUsers.push(newUser);
    }
    else {
        getUsers.push(newUser);
    }

    localStorage.setItem('user', JSON.stringify(getUsers));
}

// Add User to table
function addUser() {
    $('#user_data').show();
     $('#user_data tbody').empty();
    var getUserData = JSON.parse(localStorage.getItem('user'));
    var docFrag = document.createDocumentFragment();

    for(var i = 0, len=getUserData.length; i<len; i++) {

        var row = document.createElement('tr');
        col1 = document.createElement('td'),
        col2 = document.createElement('td'),
        col3 = document.createElement('td'),

        txt1 = document.createTextNode(getUserData[i].name),
        txt2 = document.createTextNode(getUserData[i].quantity),
        txt3 = document.createTextNode(getUserData[i].positions);

        col1.appendChild(txt1)
        col2.appendChild(txt2)
        col3.appendChild(txt3)

        row.appendChild(col1)
        row.appendChild(col2)
        row.appendChild(col3)

        docFrag.appendChild(row)
    }

    var dataTable = document.getElementById('user_data').getElementsByTagName('tbody')[0];
    dataTable.appendChild(docFrag)

}

})();





