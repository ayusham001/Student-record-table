var rIndex,
    table = document.getElementById("table");

    function checkEmptyInput()
    {
        var isEmpty = false,
            name = document.getElementById("name").value,
            studentid = document.getElementById("studentid").value,
            marks = document.getElementById("marks").value;
        if (name === "" && studentid === "" && marks === "") {
            alert("Please Enter Some Data");
            isEmpty = true;
        }
        else if(name === ""){
            alert("Please Enter Name!!");
            isEmpty = true;
        }
        else if(studentid === ""){
            alert("Please Enter Student Id!!");
            isEmpty = true;
        }
        else if(marks === ""){
            alert("Please Enter Marks!!");
            isEmpty = true;
        }
        return isEmpty;
    }
    
    // add Row
    function add(){
        if(!checkEmptyInput()){
            var table=document.getElementById('table');
            newrow=table.insertRow(table.length);
            col1=newrow.insertCell(0);
            col2=newrow.insertCell(1);
            col3=newrow.insertCell(2);

            sname=document.getElementById('name').value;
            studentid=document.getElementById('studentid').value;
            marks=document.getElementById('marks').value;

                col1.innerHTML=sname;
                col2.innerHTML=studentid;
                col3.innerHTML=marks;

            let studend_record = new Array();
            studend_record=JSON.parse(localStorage.getItem("studend_record"))?JSON.parse(localStorage.getItem("studend_record")):[]
            if(studend_record.some((v)=>{return v.studentid==studentid}))
            {
                alert("Please Enter Valid Student Id");
            }
            else{
                studend_record.push({
                    'name':sname,
                    'studentid':studentid,
                    'marks':marks,
                })
            }
            localStorage.setItem('studend_record',JSON.stringify(studend_record));

            selectedRowToInput();
        }
    }
    
    function retrievedata()
    {   
        var i=0,table=document.getElementById('table');
            items=JSON.parse(localStorage.getItem('studend_record'));

        for (i of items)
        {   
            newrow=table.insertRow(table.length),
            col1=newrow.insertCell(0),
            col2=newrow.insertCell(1),
            col3=newrow.insertCell(2),
            items=JSON.parse(localStorage.getItem('studend_record'));
            
            col1.innerHTML=i.name;
            col2.innerHTML=i.studentid;
            col3.innerHTML=i.marks;
            console.log(i);
        }
        selectedRowToInput();
    }

    function cleardata()
    {
        localStorage.removeItem ('studend_record') ;
        alert("Back up data cleared\nPlease Refresh the Page");
        var table = document.getElementById("table");
        table.deleteRow(rIndex);
    }

    // display selected row data into input text
    function selectedRowToInput()
    {
        var table = document.getElementById("table");
        
        for(var i = 1; i < table.rows.length; i++)
        {
            table.rows[i].onclick = function()
            {
                // get the seected row index
                rIndex = this.rowIndex;
                document.getElementById("name").value = this.cells[0].innerHTML;
                document.getElementById("studentid").value = this.cells[1].innerHTML;
                document.getElementById("marks").value = this.cells[2].innerHTML;
            };
        }
    }
    selectedRowToInput();
    
    function editSelectedRow()
    {
        var table = document.getElementById("table"),
            name = document.getElementById("name").value,
            studentid = document.getElementById("studentid").value,
            marks = document.getElementById("marks").value;
        if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = name;
        table.rows[rIndex].cells[1].innerHTML = studentid;
        table.rows[rIndex].cells[2].innerHTML = marks;
        }
    }
    
    function removeSelectedRow()
    {
        var table = document.getElementById("table");
        table.deleteRow(rIndex);
        // clear input text
        document.getElementById("name").value = "";
        document.getElementById("studentid").value = "";
        document.getElementById("marks").value = "";
    }
