import { Request, Response } from 'express';

import { pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export function home(req: Request, res: Response) {
    let list = pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        list,
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
}

export function dogs(req: Request, res: Response) {
    let list = pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        list,
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        }
    });
}

export function cats(req: Request, res: Response) {
    let list = pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        list,
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export function fishes(req: Request, res: Response) {
    let list = pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        list,
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        }
    });
}