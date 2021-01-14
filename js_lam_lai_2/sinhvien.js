function SinhVien(_maSv, _tenSV, _email, _password, _birthday, _khoaHoc, _diemToan, _diemly, _diemHoa,) {
    this.mssv = _maSv;
    this.tenSV = _tenSV;
    this.email = _email;
    this.pass = _password;
    this.date = _birthday;
    this.khaoHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLy = _diemly;
    this.diemHoa = _diemHoa;
    this.diemTb = 0;

    this.tinhDTB = function () {
        this.diemTb = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3;
    };

}