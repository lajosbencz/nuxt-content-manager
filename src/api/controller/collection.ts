import {Request, Response} from 'express';
import connection from "../connection";
import {Collection} from "../entity/Collection";
import {CollectionItem} from "../entity/CollectionItem";

class CollectionController {

    constructor() {
    }

    public getAllCollections(req: Request, res: Response) {
        connection
            .then(async connection => {
                const collections: Collection[] = await connection.manager.find(Collection);
                res.json(collections);
            })
            .catch(error => {
                console.error(error);
                res.json(error);
            })
    }

    public addCollection(req: Request, res: Response) {
        connection
            .then(async connection => {
                const dCollection = req.body;
                const dCollectionItems = dCollection.items;
                let collection = new Collection();
                collection.name = dCollection.name;
                collection.items = [];
                dCollectionItems.forEach(item => {
                    const itemEntity: CollectionItem = new CollectionItem();
                    itemEntity.name = item.name;
                    itemEntity.type = item.type;
                    collection.items.push(itemEntity);
                })
                await connection.manager.save(collection);
                res.json({message: "Successfully Saved."})
            })
            .catch(error => {
                console.error("Error ", error);
                res.json(error);
            })
    }



    // public updateSuperHero(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //
    //             let superHero = await connection.manager.findOne(SuperHero, req.params.superHeroId);
    //
    //             let requestSuperHero = req.body;
    //             let requestPower = requestSuperHero.power;
    //
    //             superHero.name = requestSuperHero.name;
    //             superHero.power = [];
    //
    //             // delete previous power of our super-hero
    //             superHero.power.forEach(async power => {
    //                 await connection.manager.remove(Power, {id: power.id});
    //             });
    //
    //             // add new power to our super-hero
    //             requestPower.forEach(requestPower => {
    //                 let power: Power = new Power();
    //                 power.ability = requestPower;
    //                 superHero.power.push(power);
    //             });
    //
    //             await connection.manager.save(superHero);
    //             res.json({message: "Successfully Updated."})
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // }
    //
    // public getSuperHeroById(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //             let superHero = await connection.manager.findOne(SuperHero, req.params.superHeroId);
    //             res.json(superHero)
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // }
    //
    // public deleteSuperHero(req: Request, res: Response) {
    //     connection
    //         .then(async connection => {
    //             let superHero = await connection.manager.findOne(SuperHero, req.params.superHeroId);
    //
    //             // delete all power first
    //             superHero.power.forEach(async power => {
    //                 await connection.manager.remove(Power, {id: power.id});
    //             });
    //
    //             // delete our super-hero
    //             await connection.manager.remove(SuperHero, {id: req.params.superHeroId});
    //
    //             res.json({message: "Successfully Removed."})
    //         })
    //         .catch(error => {
    //             console.error("Error ", error);
    //             res.json(error);
    //         });
    // }
}

export {CollectionController}
