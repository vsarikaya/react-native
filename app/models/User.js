// @flow
export default class User {
    id: number;
    fullname: string;
    age: number;

    /**
     * User Information
     *
     * @param id
     * @param fullname
     * @param age
     */
    constructor(id: number, fullname: string, age: number) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
    }

}
