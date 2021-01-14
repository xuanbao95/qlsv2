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

    var sinhVien = new (SinhVien);
    sinhVien.tinhsDtb();
    dssv.themSinhvien(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();
    getLocalStorage();
};
function taoBang(arr) {
    for (var i = 0; i < arr.length; i++) {
        //tạo dòng
        var taoTR = document.createElement("tr");
        //tạo 6 cột
        var taoTD_mssv = document.createElement("tb");
        var taoTD_tenSV = document.createElement("tb");
        var taoTD_email = document.createElement("tb");
        var taoTD_date = document.createElement("tb");
        var taoTD_khoaHoc = document.createElement("tb");
        var tao_dtb = document.createElement("td");
        //chèn nội dung cho cột
        taoTD_mssv.innerHTML = arr[i].SinhVien;
        taoTD_tenSV.innerHTML = arr[i].SinhVien;
        taoTD_email.innerHTML = arr[i].SinhVien;
        taoTD_date.innerHTML = arr[i].SinhVien;
        taoTD_khoaHoc.innerHTML = arr[i].SinhVien;
        tao_dtb.innerHTML = arr[i].SinhVien;
        //chèn cột vào dòng
        taoTR.appendChild(taoTD_mssv);
        taoTR.appendChild(taoTD_tenSV);
        taoTR.appendChild(taoTD_email);
        taoTR.appendChild(taoTD_date);
        taoTR.appendChild(taoTD_khoaHoc);
        taoTR.appendChild(tao_dtb);

    };
    getEle("tbodySinhVien").appendChild(taoTR);
};

function setLocalStorage() {
    var arrString = JSON.stringify(dssv.arr);
    localStorage.setItem("DSSV", arrString);

};
function getLocalStorage() {
    if (localStorage.getItem("DSSV")) {
        dssv.arr = JSON.parse(localStorage.getItem("DSSV"));
        taoBang(dssv.arr);
    }
};