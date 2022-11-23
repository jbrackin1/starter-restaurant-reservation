const knex = require("../db/connection")

function list(){
    return knex("reservations")
    .select("*")
    .where({reservation_date})
    .where({status: "finished"})
    .orderBy("reservation_time");
}

function search(number){
    return knex("reservations")
    .whereRaw(
        "translate(number, '() -', '') like ?",
        `%${number.replace(/\D/g, "")}%`
    )
    .orderBy("reservation_date");
}

function read(id){
    return knex("reservations").select("*").where({id}).first();
}

function create(reservation){
    return knex("reservations")
    .insert(reservation)
    .returning("*")
    .then((record) => record[0])
}

function update(updatedReservation){
    return knex("reservations")
    .select("*")
    .where({reservation_id: updatedReservation.reservation_id})
    .update(updatedReservation, "*")
    .then((record) => record[0]);
}

function updateStatus(id, status){
    return knex("reservations")
    .select("*")
    .where({id})
    .update({status: status}, "*")
    .then((record) => record[0])
}

module.exports = {
    list,
    search,
    read,
    create,
    update,
    updateStatus
}