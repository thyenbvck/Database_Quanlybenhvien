class Employee {
  constructor(
    Ma_so_nhan_vien,
    CCCD,
    Ho,
    Ten,
    Gioi_tinh,
    Dia_chi,
    Email,
    Ngay_ky_hop_dong,
    Luong,
    Ngay_sinh
  ) {
    (this.Ma_so_nhan_vien = Ma_so_nhan_vien),
      (this.CCCD = CCCD),
      (this.Ho = Ho),
      (this.Ten = Ten),
      (this.Gioi_tinh = Gioi_tinh),
      (this.Dia_chi = Dia_chi),
      (this.Email = Email),
      (this.Ngay_ky_hop_dong = Ngay_ky_hop_dong),
      (this.Luong = Luong),
      (this.Ngay_sinh = Ngay_sinh);
  }
}

module.exports = Employee;
