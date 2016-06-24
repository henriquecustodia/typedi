import {Service} from "../../src/index";
import {Driver} from "../sample7-inherited-properties/Driver";
import {Inject} from "../../src/decorators";
import {Engine} from "../sample7-inherited-properties/Engine";

@Service()
export class Car {

    drive(): void {
        console.log("Im driving the car");
    }

}