export default class User {

    id: number;
    fullname: string;
    age: number;

    /**
     * Kullanıcı Bilgileri
     * @param {*string} fullname - Kullanıcı adı
     * @param {*number} age - Kullanıcı Yaşı
     *
     * @returns User
     */
    constructor(id: number, fullname: string, age: number) {
      this.id = id;
      this.fullname = fullname;
      this.age = age;
    }

}
