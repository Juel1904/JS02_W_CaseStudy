class NghiPhep {
    constructor(ten, ma, namsinh, namLV, gioitinh, ngayNP) {
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
    let maNV = parseInt(document.getElementById("ma-nv").value);
    let namsinhNV = parseInt(document.getElementById("namsinh-nv").value);
    let namLVNV = parseInt(document.getElementById("nam-lv").value);
    var yNow = new Date();
    var phepBonus = Math.floor((parseInt(yNow.getFullYear()) - namLVNV) / 5);
    var phepFinal = phepBonus + 12;
    
    let newNV = new NghiPhep(
      nameNV,
      maNV,
      namsinhNV,
      namLVNV,
      gioitinhNV,
      phepFinal
    );
  
    dsNghiPhep.push(newNV);
    alert("Đã thêm thành công nhân viên " + nameNV + " vào công ty");
    
  });
  
  function showDS() {
    var bangNV = document.getElementById("bangdsNV");
    
    for (i = 1; i <= globalArr; i++) {
      var deleteRow = bangNV.deleteRow(1);
    }
    
    for (i = 1; i <= dsNghiPhep.length; i++) {
      var updateRow = bangNV.insertRow(i);
      
      var CellTen = updateRow.insertCell(0);
      CellTen.innerHTML = dsNghiPhep[i - 1].ten;
      var CellMa = updateRow.insertCell(1);
      CellMa.innerHTML = dsNghiPhep[i - 1].ma;
      var CellNamSinh = updateRow.insertCell(2);
      CellNamSinh.innerHTML = dsNghiPhep[i - 1].namsinh;
      var CellNamLV = updateRow.insertCell(3);
      CellNamLV.innerHTML = dsNghiPhep[i - 1].namLV;
      var CellGioiTinh = updateRow.insertCell(4);
      CellGioiTinh.innerHTML = dsNghiPhep[i - 1].gioitinh;
      var CellNgayNP = updateRow.insertCell(5);
      CellNgayNP.innerHTML = dsNghiPhep[i - 1].ngayNP;
      globalArr = parseInt(dsNghiPhep.length);
      
    }
    
  }
  function xoaNV() {
    let xoaMaNV = document.getElementById("maNV-xoa").value;
    let tenNVxoa;
    let check = false;
    
    for (let i in dsNghiPhep) {
      if (dsNghiPhep[i].ma == xoaMaNV) {
        check = true;
        globalArr = parseInt(dsNghiPhep.length);
        tenNVxoa = dsNghiPhep[i].ten;
        dsNghiPhep.splice(i, 1);
        
        alert("Đã xóa nhân viên " + tenNVxoa + " khỏi danh sách công ty");
        // var bangNV = document.getElementById("bangdsNV");
        // for (i = 1; i <= globalArr; i++) {
        //   var deleteRow = bangNV.deleteRow(1);
        // }
      }
    }
    if (check == false) {
      alert("Không có nhân viên trùng với mã cán bộ này");
    }
  
    alert('Vui lòng click "Hiển thị danh sách" để refresh danh sách nhân viên');
  }
  
  function xinNP() {
    let maXinNP = document.getElementById("maNV-np").value;
    let batdauNPStr = document.getElementById("begin-day").value;
    let ketthucNPStr = document.getElementById("end-day").value;
    // var testBeginday = new Date(batdauNPStr);
    // console.log(testBeginday.getDay());
    var batdauNP = parseInt(batdauNPStr.slice(8, 10));
    var ketthucNP = parseInt(ketthucNPStr.slice(8, 10));
    var ngaythangNP = batdauNPStr.slice(0,8);
    // console.log(ngaythangNP);
    var kyphep = ketthucNP - batdauNP;
    
    let tenNVNP;
    if (kyphep < 0) {
      alert("Vui lòng xin nghỉ phép trong phạm vi một tháng!");
    } else {
        var tempKynghi = 0;
        for(j=batdauNP;j<=ketthucNP;j++){
            
            var temCheckday = new Date(ngaythangNP+j);
            if(temCheckday.getDay()!=0 && temCheckday.getDay()!=6){
                tempKynghi +=1;
                // console.log(temCheckday.getDay());
            }
            
        }
        // console.log(tempKynghi);
      let check = false;
      for (let i in dsNghiPhep) {
        if (dsNghiPhep[i].ma == maXinNP) {
          check = true;
          dsNghiPhep[i].ngayNP = parseInt(dsNghiPhep[i].ngayNP - tempKynghi);
          tenNVNP = dsNghiPhep[i].ten;
          globalArr = parseInt(dsNghiPhep.length);
          alert("Đã xin nghỉ phép cho nhân viên " + tenNVNP + " thành công");
          
        }
      }
      if (check == false) {
        alert("Không có nhân viên trùng với mã cán bộ này");
      }
    }
    alert('Vui lòng click "Hiển thị danh sách" để refresh danh sách nhân viên');
  }