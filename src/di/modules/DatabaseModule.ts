import {BaseModule} from "../Module";
import {Container, Scope} from "typescript-ioc";
import {MongoDatabase, MongoDatabaseImpl} from "../../database/MongoDatabase";

export class DatabaseModule extends BaseModule{
    configuration() {
        Container.bind(MongoDatabase).to(MongoDatabaseImpl).scope(Scope.Singleton)
    }
}