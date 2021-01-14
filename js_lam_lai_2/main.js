function getEle(id) {
    return document.getElementById(id);
};
var dssv = new DanhSachSinhVien();
function btnThemSinhVien(event) {
    event.preventDefault();
    var _maSv = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _password = getEle("txtPass").value;
    var _birthday = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemly = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;

    var sinhVien = new SinhVien(_maSv, _tenSV, _email, _password, _birthday, _khoaHoc, _diemToan, _diemly, _diemHoa,);
    sinhVien.tinhDTB();
    dssv.themSinhVien(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();
    getLocalStorage();
}
function taoBang(arr) {
    for (var i = 0; i < arr.length; i++) {
        //tạo dòng
        var tagTR = document.createElement("tr");
        //tạo 6 cột
        var tagTD_mssv = document.createElement("td");
        var tagTD_tenSV = document.createElement("td");
        var tagTD_email = document.createElement("td");
        var tagTD_date = document.createElement("td");
        var tagTD_khoaHoc = document.createElement("td");
        var tagTD_diemTB = document.createElement("td");
        //gán vào innHTML
        tagTD_mssv.innerHTML = arr[i];
        tagTD_tenSV.innerHTML = arr[i];
        tagTD_email.innerHTML = arr[i];
        tagTD_date.innerHTML = arr[i];
        tagTD_khoaHoc.innerHTML = arr[i];
        tagTD_diemTB.innerHTML = arr[i];
        //chèn cột vào dòng
        tagTR.appendChild(tagTD_mssv);
        tagTR.appendChild(tagTD_tenSV);
        tagTR.appendChild(tagTD_email);
        tagTR.appendChild(tagTD_date);
        tagTR.appendChild(tagTD_khoaHoc);
        tagTR.appendChild(tagTD_diemTB);
    };
    getEle("tbodySinhVien").appendChild(tagTR);
};
function setLocalStorage() {
    var arrString = JSON.stringify(dssv.arr);
    localStorage.setItem("DSSV", arrString);
}
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dssv.arr = JSON.parse(localStorage.getItem("DSSV"));
        taoBang(dssv.arr);
    }
}