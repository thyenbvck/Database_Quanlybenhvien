class Patient {
  constructor(
    Ma_benh_nhan,
    CCCD,
    Ho,
    Ten,
    Dia_chi,
    Email,
    Gioi_tinh,
    Ngay_sinh
  ) {
    (this.Ma_benh_nhan = Ma_benh_nhan),
      (this.CCCD = CCCD),
      (this.Ho = Ho),
      (this.Ten = Ten),
      (this.Dia_chi = Dia_chi),
      (this.Email = Email),
      (this.Gioi_tinh = Gioi_tinh),
      (this.Ngay_sinh = Ngay_sinh);
  }
}

module.exports = Patient;
