//?----------------------------IMPORTS--------------------------------
const { RoomType, Room,Hotel } = require("../db");


//?----------------------------CONTROLLERS------------------------------


//*------ CREATE NEW ROOMS-------------------------
const createRooms = async(id_roomType, stock) => {

    const roomType = await RoomType.findByPk(id_roomType)
    const hotel = await Hotel.findByPk(roomType.HotelId)




    if (!roomType) throw new Error("Room type doesn't exists");


    const lastRoom = await Room.findOne({
        where: {RoomTypeId: id_roomType},
        order: [["number", "DESC"]],
      });
  
      let lastRoomNumber = 0;
  
      if (lastRoom) {
        lastRoomNumber = lastRoom.number;
      }
  
      // Generar las habitaciones adicionales
      for (let i = 1; i <= stock; i++) {
        const roomNumber = lastRoomNumber + i;
       const newRoom = await Room.create({ number: roomNumber });
       console.log(newRoom);
        await roomType.addRoom(newRoom)
        await hotel.addRoom(newRoom)
      }

    
    const newRooms = await Room.findAll({where: {RoomTypeId: id_roomType}})
    if(!newRooms.length) throw new Error("Something went wrong")
    return newRooms;
}


//*------ DELETE ALL ROOMS  -------------------------
const deleteRooms = async(id_roomType) => {

    const roomType = await RoomType.findByPk(id_roomType)
    if (!roomType) throw new Error("Room type doesn't exists");

    await Room.destroy({
        where: {RoomTypeId:id_roomType}
    })
    return
}

module.exports = {createRooms, deleteRooms}