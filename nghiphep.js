class NghiPhep{
    constructor(ten, ma, namsinh, namLV, gioitinh, ngayNP){
        this.ten = ten;
        this.ma = ma;
        this.namsinh = namsinh;
        this.namLV = namLV; 
        this.gioitinh = gioitinh;
        this.ngayNP = ngayNP;
    }
}

let dsNghiPhep = [];
var globalArr = 0;

let btnAdd = document.getElementById("btn-addNV");
btnAdd.addEventListener("click", () => {
    let nameNV = document.getElementById("name-nv").value;
    let gioitinhNV = document.getElementById("GioitinhNV").value;
    let maNV =parseInt(document.getElementById("ma-nv").value);
    let namsinhNV = parseInt(document.getElementById("namsinh-nv").value);
    let namLVNV = parseInt(document.getElementById("nam-lv").value);
    var yNow = new Date();
    var phepBonus = Math.floor((parseInt(yNow.getFullYear())-namLVNV)/5);
    var phepFinal = phepBonus + 12;
    // console.log(yNow.getFullYear());
    // console.log (phepBonus);
    let newNV = new NghiPhep(nameNV,maNV,namsinhNV,namLVNV,gioitinhNV,phepFinal);

    dsNghiPhep.push(newNV);
    // console.log(dsNghiPhep);
    // console.log(newNV);
})

function showDS(){
    var bangNV = document.getElementById("bangdsNV");
    // console.log(globalArr);
    // console.log(dsNghiPhep)
    for (i=1;i<=globalArr;i++){
        var deleteRow = bangNV.deleteRow(1);
    }
    // console.log(bangNV.length);
    for (i=1;i<=dsNghiPhep.length;i++){
        var updateRow = bangNV.insertRow(i);
        // for(let j in dsNghiPhep){
        var CellTen = updateRow.insertCell(0);
        CellTen.innerHTML = dsNghiPhep[i-1].ten;
        var CellMa = updateRow.insertCell(1);
        CellMa.innerHTML = dsNghiPhep[i-1].ma;
        var CellNamSinh = updateRow.insertCell(2);
        CellNamSinh.innerHTML = dsNghiPhep[i-1].namsinh;
        var CellNamLV = updateRow.insertCell(3);
        CellNamLV.innerHTML = dsNghiPhep[i-1].namLV;
        var CellGioiTinh = updateRow.insertCell(4);
        CellGioiTinh.innerHTML = dsNghiPhep[i-1].gioitinh;
        var CellNgayNP = updateRow.insertCell(5);
        CellNgayNP.innerHTML = dsNghiPhep[i-1].ngayNP;
        globalArr =parseInt(dsNghiPhep.length);
        // console.log(globalArr);
        // console.log(dsNghiPhep)
        // bangNV.rows[i].cells[1].innerHTML = "Hlo";
        // bangNV.rows[i].cells[0].innerHTML = dsNghiPhep[i-1].ten;
        // bangNV.rows[i].cells[1].innerHTML = dsNghiPhep[i-1].ma;
        // bangNV.rows[i].cells[2].innerHTML = dsNghiPhep[i-1].namsinh;
        // bangNV.rows[i].cells[3].innerHTML = dsNghiPhep[i-1].namLV;
        // bangNV.rows[i].cells[4].innerHTML = dsNghiPhep[i-1].gioitinh;
        // bangNV.rows[i].cells[5].innerHTML = dsNghiPhep[i-1].ngayNP;
        // }//
    }
    // bangNV.rows[1].cells[1].innerHTML = "Heloo";
    // var updateRow = bangNV.insertRow(2);
    // var cell1 =updateRow.insertCell(0);
    // var cell2 =updateRow.insertCell(1);
    // bangNV.rows[2].cells[1].innerHTML = "Helo";
    // for (let i in dsNghiPhep){
    //     bangNV = bangNV + "<tr>";
    //     bangNV = bangNV + "<td>" + dsNghiPhep[i].ten + "</td>";
    //     console.log(dsNghiPhep[i].ten);
    //     console.log(bangNV);
    // }
    // bangNV = bangNV + "</tr>";
}
function xoaNV(){
    let xoaMaNV = document.getElementById("maNV-xoa").value;
    // var bangNV = document.getElementById("bangdsNV");
    // // console.log(bangNV.length);
    // for (i=1;i<=dsNghiPhep.length;i++){
    //     var deleteRow = bangNV.deleteRow(i);
    // }
    for (let i in dsNghiPhep){
        if(dsNghiPhep[i].ma == xoaMaNV){
            dsNghiPhep.splice(i,1);
            globalArr = parseInt(dsNghiPhep.length);
        }
    }
    var bangNV = document.getElementById("bangdsNV");
    for (i=1;i<=globalArr;i++){
        var deleteRow = bangNV.deleteRow(1);
    }
}