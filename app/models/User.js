export default class User {

    id: number;
    fullname: string;
    age: number;

    /**
     * User Information
     * @param {*string} fullname
     * @param {*number} age
     *
     * @returns User
     */
    constructor(id: number, fullname: string, age: number) {
      this.id = id;
      this.fullname = fullname;
      this.age = age;
    }

}
