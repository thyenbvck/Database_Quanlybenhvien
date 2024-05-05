class Employee {
  constructor(
    Ma_so_nhan_vien,
    Ho,
    Ten,
    Ngay_sinh,
    Gioi_tinh,
    CCCD,
    SDT,
    Ngay_ky_hop_dong,
    Luong,
    Dia_chi,
    Email,
  ) {
    (this.Ma_so_nhan_vien = Ma_so_nhan_vien),
    (this.SDT=SDT),
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
