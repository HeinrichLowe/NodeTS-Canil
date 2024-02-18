type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

export function createMenuObject(activeMenu: MenuOptions) {
    let returnObjct = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        returnObjct[activeMenu] = true;
    }

    return returnObjct;
}