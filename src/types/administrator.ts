/**
 * 管理者情報を表すクラスです.
 *
 */
export class Administrator {
  constructor(
    // ID
    private _id: string,
    // 名前
    private _name: string,
    // メールアドレス
    private _mailAddress: string,
    // パスワード
    private _password: string
  ) {}

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get mailAddress(): string {
    return this._mailAddress;
  }

  public set mailAddress(mailAddress: string) {
    this._mailAddress = mailAddress;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }
}
