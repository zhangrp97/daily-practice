
class Workers {
    name: String;
    constructor(public first, public second, public third) {
        this.name = first + second + third
    }
}
interface weenkend {
    saturday: String;
    sunday: String;
}
function getWho(person) {
    return 'hi, ' + person
}
let user = new Workers('Y.', 'O.', 'U.');


let res = getWho(user)
console.log(res)