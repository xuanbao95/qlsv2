function getEle(id) {
    return document.getElementById(id);
}

function hienThiThongTin() {
    /**
     * lấy thông tin ng dùng nhập
     */
    var _ten = getEle("txtTenSV").value;
    var _mssv = getEle("txtMaSV").value;
    var _loaiSv = getEle("loaiSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemVan = getEle("txtDiemVan").value;

    /**
     * đối tượng : thuộc tính & phương thức
     * - thuộc tính : là thành phần của đối tượng
     * -phương thức : là chức năng của đối tượng
     * vd : xe oto
     *  -thuộc tính : màu xe, bánh xe, hiệu xe...
     *  -phuong thức : xe chạy, thắng xe, driff...
     * 
     * vd : sinh viên
     *  -thuộc tính : mssv , tên sv, loại sinh viên, điểm toán...
     *  -phuong thức : điểm trung bình, xếp loại, ....
     */

    var sinhVien = {
        /**
         * key: value
         *  -key: tự đặt tên
         *  -value: giá trị của key
         */
        //thuộc tính
        maSV: _mssv,
        tenSV: _ten,
        loaiSV: _loaiSv,
        diemToan: _diemToan,
        diemVan: _diemVan,
        diemTB: 0,
        xepLoai: "",

        //phương thức
        tinhDTB: function () {
            this.diemTB = (parseFloat(this.diemToan) + parseFloat(this.diemVan)) / 2;
        },
        xepLoai1: function () {
            if (this.diemTB >= 8 && this.diemTB < 10) {
                this.xepLoai = "Giỏi";
            } else if (this.diemTB >= 6 && this.diemTB < 8) {
                this.xepLoai = "Khá";
            } else if (this.diemTB > 5 && this.diemTB < 6) {
                this.xepLoai = "Trung Bình";
            } else {
                this.xepLoai = "yếu";
            }
        },
    };
    getEle("spanTenSV").innerHTML = sinhVien.tenSV;
    getEle("spanMaSV").innerHTML = sinhVien.maSV;
    getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
    sinhVien.tinhDTB();
    getEle("spanDTB").innerHTML = sinhVien.diemTB;
    sinhVien.xepLoai1();
    getEle("spanXepLoai").innerHTML = sinhVien.xepLoai;
};


/**
 * hiển thị thông tin ngoài web
 */

