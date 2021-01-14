function SinhVien(_maSv, _tenSV, _email, _password, _birthday, _khoaHoc, _diemToan, _diemly, _diemHoa) {
    this.mssv = _maSv;
    this.tenSv = _tenSV;
    this.email = _email;
    this.pass = _password;
    this.date = _birthday;
    this.khoaHoc = _khoaHoc;
    this.diemToan = _diemToan;
    this.diemLy = _diemly;
    this.diemHoa = _diemHoa;
    this.diemTB = 0;

    function tinhDTB() {
        this.diemTb = (parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 3;
    }
}