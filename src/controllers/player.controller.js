import { faker } from '@faker-js/faker';
import { player_creator } from '../base/structures.js';


function check_existing_name(name = ''){
    const name_users = ['Melissa', 'Albeiro', 'Gabriella'];
    if(name_users.includes(name)){
        return false;
    }
    return true;
}

export function generate_random_name(req, res){
    const player = new player_creator(faker.string.uuid() ,faker.internet.userName());
    while(!check_existing_name(player.name)){
        player.name = faker.internet.userName();
    }
    res.send(JSON.stringify(player));
}

export function generate_random_list_name(req, res){
    const list = [];
    for(let i = 0; i < 20; i++){
        const player = new player_creator(faker.string.uuid() ,faker.internet.userName());
        if(!check_existing_name(player.name)){
            player.name = faker.internet.userName();
        }
        list.push(player);
    }
    res.send(JSON.stringify(list));
}

export function created_player(req, res){
    const req_body = req.body;
    if(req_body.custom === 'true' && !check_existing_name(req_body.name)){
        res.send(JSON.stringify({err_msg: '402', message: 'Name already exists'}));
    }else{
        const player = new player_creator(req_body.id, req_body.name);
        res.send(JSON.stringify(player));
    }
}

export default {
    generate_random_name,
    generate_random_list_name,
    created_player
}