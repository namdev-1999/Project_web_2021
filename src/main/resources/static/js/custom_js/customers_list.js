// "use strict";
// $(document).ready(function () {
//
//     // ==========user event list code end=========//
//     function row(fTable, frow) {
//         var fData = fTable.fnGetData(frow);
//         var ftable = $('>td', frow);
//
//         for (var i = 0, iLen = ftable.length; i < iLen; i++) {
//             fTable.fnUpdate(fData[i], frow, i, false);
//         }
//
//         fTable.fnDraw();
//     }
//
//     // Format phone number
//     function formatPhoneNumber(phoneNumberString) {
//         var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
//         var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
//         if (match) {
//             return match[1] + ' ' + match[2] + ' ' + match[3];
//         }
//         return null;
//     }
//
//     //Format dob
//     function formatDOB(dob) {
//         var date = dob.split('-');
//         return date[2] + "/" + date[1] + "/" + date[0];
//     }
//
//     //================== Show list customers ==================//
//     $.ajax({
//         url: '/api/customers/',
//         type: 'GET',
//         contentType: 'application/json',
//         success: function (result) {
//             if (result.length > 0) {
//                 $(".odd").remove();
//             }
//             result.forEach(function (dt) {
//                 $("#tdata").append("<tr>" +
//                     "<td>" + (dt.id + 1) + "</td>" +
//                     "<td>" + dt.name + "</td>" +
//                     "<td>" + dt.email + "</td>" +
//                     "<td>" + formatPhoneNumber(dt.phone) + "</td>" +
//                     "<td>" + formatDOB(dt.dob) + "</td>" +
//                     "<td>" + dt.level + "</td>" +
//                     "<td>" +
//                     "<a class=\"edit btn btn-primary\" href=\"/edit_customer_" + dt.id + "\"><i class=\"fa fa-fw fa-edit\"></i> Edit</a>" +
//                     "</td>" +
//                     "<td>" +
//                     "<a class=\"delete btn btn-danger\" href=\"javascript:;\"><i class=\"fa fa-trash-o\"></i> Delete</a>" +
//                     "</td>" +
//                     "</tr>"
//                 )
//                 ;
//             })
//
//         },
//         error: function (error) {
//             alert("get" + error)
//         }
//     })
//
//
//     function editRow(fTable, frow) {
//         var fData = fTable.fnGetData(frow);
//         var ftable = $('>td', frow);
//         ftable[0].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[0] + '">';
//         ftable[1].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[1] + '">';
//         ftable[2].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[2] + '">';
//         ftable[3].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[3] + '">';
//         ftable[4].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[4] + '">';
//         ftable[5].innerHTML = '<input type="text" class="form-control input-small" value="' + fData[5] + '">';
//         ftable[6].innerHTML = '<a class="edit btn btn-success" href="">Save</a>';
//         ftable[7].innerHTML = '<a class="cancel btn btn-danger" href="">Cancel</a>';
//     }
//
//     function saveRow(fTable, frow) {
//         var jqInputs = $('input', frow);
//         fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
//         fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
//         fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
//         fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
//         fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 4, false);
//         fTable.fnUpdate('<a class="delete btn btn-danger" href=""><i class="fa fa-trash-o"></i> Delete</a>', frow, 5, false);
//         fTable.fnDraw();
//     }
//
//     function cancelfitnessEditRow(fTable, frow) {
//         var jqInputs = $('input', frow);
//         fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
//         fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
//         fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
//         fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
//         fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 4, false);
//         fTable.fnDraw();
//     }
//
//     var table = $('#fitness-table');
//
//     var fTable = table.dataTable({
//         "lengthMenu": [
//             [5, 15, 20, -1],
//             [5, 15, 20, "All"]
//         ],
//         // set the initial value
//         "pageLength": 5
//     });
//
//
//     var FitnessEditing = null;
//     var FitnesNew = false;
//
//     // table.on('click', '.delete', function (e) {
//     //     e.preventDefault();
//     //     var frow = $(this).parent().parent('tr')[0];
//     //     swal({
//     //         title: "Delete?",
//     //         text: "Are you sure want to delete this row",
//     //         type: "warning",
//     //         showCancelButton: true,
//     //         confirmButtonText: "Yes",
//     //         confirmButtonColor: "#33a4d8",
//     //         cancelButtonColor: "#fc7070",
//     //         cancelButtonText: "No",
//     //         closeOnConfirm: false,
//     //         closeOnCancel: false
//     //
//     //     }).then(function () {
//     //         fTable.fnDeleteRow(frow);
//     //     });
//     //
//     // });
//
//     //
//     // table.on('click', '.cancel', function(e) {
//     //     e.preventDefault();
//     //
//     //     if (FitnesNew) {
//     //         fTable.fnDeleteRow(FitnessEditing);
//     //         FitnesNew = false;
//     //     } else {
//     //         row(fTable, FitnessEditing);
//     //         FitnessEditing = null;
//     //     }
//     // });
//
//     // table.on('click', '.edit', function(e) {
//     //     e.preventDefault();
//     //     var frow = $(this).parents('tr')[0];
//     //
//     //     if (FitnessEditing !== null && FitnessEditing != frow) {
//     //
//     //         row(fTable, FitnessEditing);
//     //         editRow(fTable, frow);
//     //         FitnessEditing = frow;
//     //     } else if (FitnessEditing == frow && this.innerHTML == "Save") {
//     //         saveRow(fTable, FitnessEditing);
//     //         FitnessEditing = null;
//     //         swal({
//     //             title: "Updated.",
//     //             text: "Successfully Saved",
//     //             type: "success",
//     //             allowOutsideClick: false
//     //
//     //         })
//     //     } else {
//     //         editRow(fTable, frow);
//     //         FitnessEditing = frow;
//     //     }
//     // });
// });
"use strict";
$(document).ready(function () {

    // ==========user event list code end=========//
    function row(fTable, frow) {
        var fData = fTable.fnGetData(frow);
        var ftable = $('>td', frow);

        for (var i = 0, iLen = ftable.length; i < iLen; i++) {
            fTable.fnUpdate(fData[i], frow, i, false);
        }

        fTable.fnDraw();
    }

    function editRow(fTable, frow) {
        var fData = fTable.fnGetData(frow);
        var ftable = $('>td', frow);
        ftable[0].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['id'] + '">';
        ftable[1].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['name'] + '">';
        ftable[2].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['email'] + '">';
        ftable[3].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['phone'] + '">';
        ftable[4].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['dob'] + '">';
        ftable[5].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['register_date'] + '">';
        ftable[6].innerHTML = '<input type="text" class="form-control input-small" value="' + fData['level'] + '">';
        ftable[7].innerHTML = '<a class="edit btn btn-success" href="">Save</a>';
        ftable[8].innerHTML = '<a class="cancel btn btn-danger" href="">Cancel</a>';
    }

    function saveRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
        fTable.fnUpdate(jqInputs[4].value, frow, 4, false);
        fTable.fnUpdate(jqInputs[5].value, frow, 5, false);
        fTable.fnUpdate(jqInputs[6].value, frow, 6, false);

        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 7, false);
        fTable.fnUpdate('<a class="delete btn btn-danger" href=""><i class="fa fa-trash-o"></i> Delete</a>', frow, 8, false);
        fTable.fnDraw();
    }

    function cancelfitnessEditRow(fTable, frow) {
        var jqInputs = $('input', frow);
        fTable.fnUpdate(jqInputs[0].value, frow, 0, false);
        fTable.fnUpdate(jqInputs[1].value, frow, 1, false);
        fTable.fnUpdate(jqInputs[2].value, frow, 2, false);
        fTable.fnUpdate(jqInputs[3].value, frow, 3, false);
        fTable.fnUpdate(jqInputs[4].value, frow, 4, false);
        fTable.fnUpdate(jqInputs[5].value, frow, 5, false);
        fTable.fnUpdate(jqInputs[6].value, frow, 6, false);
        fTable.fnUpdate('<a class="edit btn btn-primary" href=""><i class="fa fa-fw fa-edit"></i> Edit</a>', frow, 7, false);
        fTable.fnDraw();
    }

    var table = $('#fitness-table');

    var fTable = table.dataTable({
        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"]
        ],
        // set the initial value
        "pageLength": 5,
        ajax: {
            url: '/api/customers/',
            contentType: 'application/json',
            dataType: 'json',
            dataSrc: ''
        },
        rowId: 'id',
        columns: [
            {data: 'id'},
            {data: 'name'},
            {data: 'email'},
            {data: 'phone'},
            {data: 'dob', render: $.fn.dataTable.render.moment('DD/MM/YYYY')},
            {data: 'register_date'},
            {data: 'level'},
            {
                "data": null,
                "defaultContent": "<a class=\"edit btn btn-primary\" href=\"javascript:;\">\n" +
                    "<i class=\"fa fa-fw fa-edit\"></i> Edit\n" + "</a>"
            },
            {
                "data": null,
                "defaultContent": "<a class=\"delete btn btn-danger\" href=\"javascript:;\">\n" +
                    "<i class=\"fa fa-trash-o\"></i> Delete\n" + "</a>"
            }
        ],
        select: true
    });
    // format date time
    $.fn.dataTable.render.moment = function (from, to, locale) {
        // Argument shifting
        if (arguments.length === 1) {
            locale = 'en';
            to = from;
            from = 'YYYY-MM-DD';
        } else if (arguments.length === 2) {
            locale = 'en';
        }
        return function (d, type, row) {
            if (!d) {
                return type === 'sort' || type === 'type' ? 0 : d;
            }
            var m = window.moment(d, from, locale, true);
            // Order and type get a number value from Moment, everything else
            // sees the rendered value
            return m.format(type === 'sort' || type === 'type' ? 'x' : to);
        };
    };

    var FitnessEditing = null;
    var FitnesNew = false;

    $('#fitness-table_new').on('click', function (e) {
        e.preventDefault();
        if (FitnesNew && FitnessEditing) {
            fTable.fnDeleteRow(FitnessEditing);
            FitnessEditing = null;
            FitnesNew = false;
            return;
        }

        var aiNew = fTable.fnAddData(['', '', '', '', '', '']);
        var frow = fTable.fnGetNodes(aiNew[0]);
        editRow(fTable, frow);
        FitnessEditing = frow;
        FitnesNew = true;
    });
    table.on('click', '.delete', function (e) {
        e.preventDefault();
        var frow = $(this).parent().parent('tr')[0];
        swal({
            title: "Delete?",
            text: "Are you sure want to delete this row",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            confirmButtonColor: "#33a4d8",
            cancelButtonColor: "#fc7070",
            cancelButtonText: "No",
            closeOnConfirm: false,
            closeOnCancel: false

        }).then(function () {
            $.ajax({
                url: '/api/customers/delete/' + frow.id,
                contentType: 'application/json',
                dataType: 'json text',
                type: 'DELETE',
                success: function (data) {
                    $('#alert_message').html('<div class="alert alert-success">' + data + '</div>');
                    $('#user_data').DataTable().destroy();
                    fTable.fnDeleteRow(frow);
                    fetch_data();
                    location.reload();
                },
                error: function (error) {
                    console.log(error);
                    location.reload();
                }
            });
        });
    })

    table.on('click', '.cancel', function (e) {
        e.preventDefault();

        if (FitnesNew) {
            fTable.fnDeleteRow(FitnessEditing);
            FitnesNew = false;
        } else {
            row(fTable, FitnessEditing);
            FitnessEditing = null;
        }
        location.reload();
    });

    table.on('click', '.edit', function (e) {
        e.preventDefault();
        var frow = $(this).parent().parent('tr')[0];
        if (FitnessEditing !== null && FitnessEditing != frow) {
            row(fTable, FitnessEditing);
            editRow(fTable, frow);
            FitnessEditing = frow;
            // console.log(row)

        } else if (FitnessEditing == frow && this.innerHTML == "Save") {
            var jqInputs = $('input', FitnessEditing);
            var id = FitnessEditing.id;
            var obj = {
                id: id,
                name: jqInputs[0].value,
                email: jqInputs[1].value,
                phone: jqInputs[2].value,
                dob: jqInputs[3].value,
                register_date: jqInputs[4].value,
                level: jqInputs[5].value,
            };
            var jsonData = JSON.stringify(obj);
            $.ajax({
                type: "PUT",
                url: "/api/customers/edit/" + id,
                contentType: "application/json",
                dataType: "json",
                data: jsonData.toString()
            });
            saveRow(fTable, FitnessEditing);
            FitnessEditing = null;
            swal({
                title: "Updated.",
                text: "Successfully Saved",
                type: "success",
                allowOutsideClick: false
            })
        } else {
            editRow(fTable, frow);
            FitnessEditing = frow;
        }
    });

});