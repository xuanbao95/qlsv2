document.querySelector(".form-group .btn").addEventListener("click", function () {
    var _maSv = document.getElementById("txtMaSV").value;
    var _tenSV = document.getElementById("txtTenSV").value;
    var _email = document.getElementById("txtEmail").value;
    var _password = document.getElementById("txtPass").value;
    var _birthday = document.getElementById("txtNgaySinh").value;
    var _khoaHoc = document.getElementById("khSV").value;
    var _diemToan = document.getElementById("txtDiemToan").value;
    var _diemly = document.getElementById("txtDiemLy").value;
    var _diemHoa = document.getElementById("txtDiemHoa").value;
    // var content = document.createElement("div");

    var sinhVien = {
        mssv: _maSv,
        tenSV: _tenSV,
        email: _email,
        birthday: _birthday,
        khoaHoc: _khoaHoc,
        diemToan: _diemToan,
        diemLy: _diemly,
        diemHoa: _diemHoa,
        diemTb: 0,
        tinhDtb: function () {
            this.diemTb = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3;
        },

    }
    document.getElementById("MaSV").innerHTML = sinhVien.mssv;
    document.getElementById("tenSv").innerHTML = sinhVien.tenSV;
    document.getElementById("emailSvien").innerHTML = sinhVien.email;
    document.getElementById("birthday").innerHTML = sinhVien.birthday;
    document.getElementById("khoaHocSv").innerHTML = sinhVien.khoaHoc;
    sinhVien.tinhDtb();
    document.getElementById("diemTrungBinh").innerHTML = sinhVien.diemTb;
});
