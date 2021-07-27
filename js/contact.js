function EnableDdl(){
    var ddl = document.getElementById("DDL");
    ddl.disabled=africa.selected ? false : true;
    if(!ddl.disabled){
        ddl.focus();
    }
}