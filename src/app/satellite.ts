export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }
    
    shouldShowWarning() : boolean {
        let warningSign = "Space Debris"
        if (this.type.toLowerCase() === warningSign.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}
