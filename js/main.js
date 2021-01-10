function hienThiThongTin() {
    /**
     * lấy thông tin hiển thị do người dùng nhập vào
     */
    var ten = getEle("txtTenSV").value;
    var mssv = getEle("txtMaSV").value;
    var loaiSv = getEle("loaiSV").value;
    var diemToan = getEle("txtDiemToan").value;
    var diemVan = getEle("txtDiemVan").value;
    console.log(diemToan);
    /**
     * hiển thị thông tin ra ngoài html
     */
    var dtb = tinhDiemTB(diemToan, diemVan)
    console.log(dtb);
    getEle("spanTenSV").innerHTML = ten;
    getEle("spanMaSV").innerHTML = mssv;
    getEle("spanLoaiSV").innerHTML = loaiSv;
    getEle("spanDTB").innerHTML = dtb;
    getEle("spanXepLoai").innerHTML = xepLoai(dtb);
}
function getEle(id) {
    return document.getElementById(id);
};
function tinhDiemTB(diemToan, diemVan) {
    var dtb;
    dtb = (parseFloat(diemToan) + parseFloat(diemVan)) / 2;
    console.log(dtb);
    return dtb;
}
function xepLoai(dtb) {
    if (dtb >= 8 && dtb < 10) {
        return "Giỏi";
    } else if (dtb >= 6 && dtb < 8) {
        return "Khá";
    } else if (dtb > 5 && dtb < 6) {
        return "Trung Bình";
    } else {
        return "yếu";
    }
}
